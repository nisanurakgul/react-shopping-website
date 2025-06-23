import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'İsim en az 2 karakter olmalıdır')
      .required('İsim gereklidir'),
    email: Yup.string()
      .email('Geçerli bir e-posta adresi giriniz')
      .required('E-posta gereklidir'),
    subject: Yup.string()
      .min(5, 'Konu en az 5 karakter olmalıdır')
      .required('Konu gereklidir'),
    message: Yup.string()
      .min(10, 'Mesaj en az 10 karakter olmalıdır')
      .required('Mesaj gereklidir'),
    category: Yup.string()
      .required('Kategori seçiniz')
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', values);
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            İletişim
          </h1>
          <p className={styles.subtitle}>
            Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin.
            Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>
              Mesaj Gönder
            </h2>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
              </div>
            )}

            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
                category: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Ad Soyad *
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className={`${styles.formInput} ${errors.name && touched.name ? 'error' : ''}`}
                        placeholder="Adınız ve soyadınız"
                      />
                      <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        E-posta *
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className={`${styles.formInput} ${errors.email && touched.email ? 'error' : ''}`}
                        placeholder="ornek@email.com"
                      />
                      <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="category" className={styles.formLabel}>
                        Kategori *
                      </label>
                      <Field
                        as="select"
                        id="category"
                        name="category"
                        className={`${styles.formSelect} ${errors.category && touched.category ? 'error' : ''}`}
                      >
                        <option value="">Kategori seçiniz</option>
                        <option value="general">Genel Bilgi</option>
                        <option value="support">Müşteri Desteği</option>
                        <option value="complaint">Şikayet</option>
                        <option value="suggestion">Öneri</option>
                        <option value="partnership">İş Ortaklığı</option>
                      </Field>
                      <ErrorMessage name="category" component="div" className={styles.errorMessage} />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>
                        Konu *
                      </label>
                      <Field
                        type="text"
                        id="subject"
                        name="subject"
                        className={`${styles.formInput} ${errors.subject && touched.subject ? 'error' : ''}`}
                        placeholder="Mesajınızın konusu"
                      />
                      <ErrorMessage name="subject" component="div" className={styles.errorMessage} />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Mesaj *
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className={`${styles.formTextarea} ${errors.message && touched.message ? 'error' : ''}`}
                      placeholder="Mesajınızı buraya yazın..."
                    />
                    <ErrorMessage name="message" component="div" className={styles.errorMessage} />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>
              İletişim Bilgileri
            </h2>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoLabel}>Adres</div>
                  <div className={styles.infoValue}>
                    Moda Caddesi No: 123<br />
                    Kadıköy, İstanbul<br />
                    34710 Türkiye
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoLabel}>Telefon</div>
                  <div className={styles.infoValue}>
                    <a href="tel:+902161234567">+90 (216) 123 45 67</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoLabel}>E-posta</div>
                  <div className={styles.infoValue}>
                    <a href="mailto:info@modastore.com">info@modastore.com</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoLabel}>Çalışma Saatleri</div>
                  <div className={styles.infoValue}>
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Cumartesi: 10:00 - 16:00<br />
                    Pazar: Kapalı
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h2 className={styles.mapTitle}>
            Konum
          </h2>
          <div className={styles.mapContainer}>
            Harita burada görüntülenecek
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 