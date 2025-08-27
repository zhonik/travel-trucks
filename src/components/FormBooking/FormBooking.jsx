import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './FormBooking.module.css';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { DateRangePicker } from '../DateRangePicker/DataRangePicker';

const BookingSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email addresss').required('Required'),
  dateRange: Yup.array()
    .of(Yup.date().required('Required'))
    .test('two-dates', 'You must select both dates', val => val && val[0] && val[1])
    .required('Required'),
  //   date: Yup.date()
  //     .transform((value, originalValue) => {
  //       if (originalValue instanceof Date) return originalValue;

  //       if (typeof originalValue === 'string') {
  //         const [day, month, year] = originalValue.split('.');
  //         if (day && month && year) {
  //           return new Date(`${year}-${month}-${day}`);
  //         }
  //       }
  //       return value;
  //     })
  //     .typeError('Use format DD.MM.YYYY')
  //     .required('Required')
  //     .min(new Date(Date.now() + 24 * 60 * 60 * 1000), 'Choose a date starting from tomorrow')
  //     .max(
  //       new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  //       'Date cannot be later than 1 year from today'
  //     ),
  comment: Yup.string().min(10, 'Too short!').max(300, 'Too long!'),
});

const initialValues = {
  name: '',
  email: '',
  dateRange: [null, null],
  comment: '',
};

const FormBooking = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Booking data:', values);
    toast.success('Booking successful!');
    resetForm();
  };
  return (
    <div className={s.bookingFormContainer}>
      <div className={s.bookingTitleBox}>
        <h2 className={s.bookingTitle}>Book your campervan now</h2>
        <p className={s.bookingDesc}>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={s.form}>
            <div className={s.inputsWrapp}>
              <Field className={clsx(s.field)} type='text' name='name' placeholder='Name*' />
              <ErrorMessage className={s.error} name='name' component='span' />

              <Field className={clsx(s.field)} type='email' name='email' placeholder='Email*' />
              <ErrorMessage className={s.error} name='email' component='span' />

              <DateRangePicker
                Input={props => <input {...props} />}
                onChange={dates => setFieldValue('dateRange', dates)}
                value={values.dateRange}
              />
              <ErrorMessage className={s.error} name='dateRange' component='span' />

              <Field
                className={clsx(s.field, s.textarea)}
                component='textarea'
                name='comment'
                placeholder='Comment'
              />
            </div>

            <button className={s.button} type='submit'>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBooking;
