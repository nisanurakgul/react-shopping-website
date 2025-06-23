import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Geçerli bir e-posta adresi giriniz')
      .required('E-posta gereklidir'),
    password: Yup.string()
      .min(6, 'Şifre en az 6 karakter olmalıdır')
      .required('Şifre gereklidir')
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setIsSubmitting(true);
    setLoginError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate login validation
      if (values.email === 'demo@example.com' && values.password === 'password') {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({
          id: 1,
          name: 'Demo User',
          email: values.email
        }));
        
        navigate('/');
      } else {
        setLoginError('E-posta veya şifre hatalı');
      }
    } catch (error) {
      setLoginError('Giriş yapılırken bir hata oluştu');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} ile giriş özelliği yakında eklenecek!`);
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
              Hesabınıza Giriş Yapın
            </h1>
            <p className={styles.subtitle}>
              Hesabınıza giriş yaparak alışverişe devam edin
            </p>
          </div>

          {/* Error Message */}
          {loginError && (
            <div className={styles.errorMessage}>
              {loginError}
            </div>
          )}

          {/* Login Form */}
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberMe: false
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    E-posta
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

                <div className={styles.formGroup}>
                  <label htmlFor="password" className={styles.formLabel}>
                    Şifre
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className={`${styles.formInput} ${errors.password && touched.password ? styles.error : ''}`}
                    placeholder="Şifrenizi girin"
                  />
                  <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                </div>

                <div className={styles.formOptions}>
                  <label className={styles.rememberMe}>
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className={styles.checkbox}
                    />
                    Beni hatırla
                  </label>
                  <Link
                    to="/sifremi-unuttum"
                    className={styles.forgotPassword}
                  >
                    Şifremi unuttum
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Divider */}
          <div className={styles.divider}>
            <span>veya</span>
          </div>

          {/* Social Login */}
          <div className={styles.socialLogin}>
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className={styles.socialButton}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google ile Giriş Yap
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('Facebook')}
              className={styles.socialButton}
            >
              <svg className={styles.socialIcon} fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook ile Giriş Yap
            </button>
          </div>

          {/* Register Link */}
          <div className={styles.registerSection}>
            <p className={styles.registerText}>
              Hesabınız yok mu?
            </p>
            <Link
              to="/kayit"
              className={styles.registerLink}
            >
              Hemen kayıt olun
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 