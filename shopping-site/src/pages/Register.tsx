import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Register.module.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Ad en az 2 karakter olmalıdır')
      .required('Ad gereklidir'),
    lastName: Yup.string()
      .min(2, 'Soyad en az 2 karakter olmalıdır')
      .required('Soyad gereklidir'),
    email: Yup.string()
      .email('Geçerli bir e-posta adresi giriniz')
      .required('E-posta gereklidir'),
    password: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalıdır')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir')
      .required('Şifre gereklidir'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
      .required('Şifre tekrarı gereklidir'),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]*$/, 'Geçerli bir telefon numarası giriniz')
      .required('Telefon numarası gereklidir'),
    terms: Yup.boolean()
      .oneOf([true], 'Kullanım şartlarını kabul etmelisiniz')
      .required('Kullanım şartlarını kabul etmelisiniz')
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setIsSubmitting(true);
    setRegisterError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Registration data:', values);
      
      // Simulate successful registration
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({
        id: 1,
        name: `${values.firstName} ${values.lastName}`,
        email: values.email
      }));
      
      navigate('/');
    } catch (error) {
      setRegisterError('Kayıt olurken bir hata oluştu');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  const handleSocialRegister = (provider: string) => {
    alert(`${provider} ile kayıt özelliği yakında eklenecek!`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formCard}>
          {/* Form Header */}
          <div className={styles.formHeader}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>M</span>
              </div>
              <span className={styles.logoText}>ModaStore</span>
            </div>
            <h1 className={styles.title}>
              Hesap Oluşturun
            </h1>
            <p className={styles.subtitle}>
              Hemen ücretsiz hesap oluşturun ve alışverişe başlayın
            </p>
          </div>

          {/* Error Message */}
          {registerError && (
            <div className={styles.errorMessage}>
              {registerError}
            </div>
          )}

          {/* Registration Form */}
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone: '',
              terms: false
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.formLabel}>
                      Ad *
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`${styles.formInput} ${errors.firstName && touched.firstName ? styles.error : ''}`}
                      placeholder="Adınız"
                    />
                    <ErrorMessage name="firstName" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.formLabel}>
                      Soyad *
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`${styles.formInput} ${errors.lastName && touched.lastName ? styles.error : ''}`}
                      placeholder="Soyadınız"
                    />
                    <ErrorMessage name="lastName" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    E-posta *
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`${styles.formInput} ${errors.email && touched.email ? styles.error : ''}`}
                    placeholder="ornek@email.com"
                  />
                  <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.formLabel}>
                      Şifre *
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className={`${styles.formInput} ${errors.password && touched.password ? styles.error : ''}`}
                      placeholder="En az 8 karakter"
                    />
                    <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.formLabel}>
                      Şifre Tekrarı *
                    </label>
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`${styles.formInput} ${errors.confirmPassword && touched.confirmPassword ? styles.error : ''}`}
                      placeholder="Şifrenizi tekrar girin"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Telefon Numarası *
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`${styles.formInput} ${errors.phone && touched.phone ? styles.error : ''}`}
                    placeholder="+90 (555) 123 45 67"
                  />
                  <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
                </div>

                <div className={styles.termsGroup}>
                  <Field
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className={styles.checkbox}
                  />
                  <label htmlFor="terms" className={styles.termsText}>
                    <Link to="/kullanim-sartlari" className={styles.termsLink}>
                      Kullanım şartlarını
                    </Link>
                    {' '}ve{' '}
                    <Link to="/gizlilik-politikasi" className={styles.termsLink}>
                      gizlilik politikasını
                    </Link>
                    {' '}okudum ve kabul ediyorum *
                  </label>
                </div>
                <ErrorMessage name="terms" component="div" className={styles.errorMessage} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? 'Kayıt olunuyor...' : 'Hesap Oluştur'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Divider */}
          <div className={styles.divider}>
            <span>veya</span>
          </div>

          {/* Social Register */}
          <div className={styles.socialRegister}>
            <button
              type="button"
              onClick={() => handleSocialRegister('Google')}
              className={styles.socialButton}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google ile Kayıt Ol
            </button>

            <button
              type="button"
              onClick={() => handleSocialRegister('Facebook')}
              className={styles.socialButton}
            >
              <svg className={styles.socialIcon} fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook ile Kayıt Ol
            </button>
          </div>

          {/* Login Link */}
          <div className={styles.loginSection}>
            <p className={styles.loginText}>
              Zaten hesabınız var mı?
            </p>
            <Link
              to="/giris"
              className={styles.loginLink}
            >
              Giriş yapın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 