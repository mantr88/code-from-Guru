import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, FormField, ErrorMessage } from './RecipeForm.styled';

const RecepieSchema = Yup.object().shape({
  name: Yup.string().required('REQUERED FIELD!'),
  image: Yup.string().required('REQUERED FIELD!'),
  time: Yup.number().positive('Must be > 0!').required('REQUERED FIELD!'),
  servings: Yup.number().positive('Must be > 0!').required('REQUERED FIELD!'),
  calories: Yup.number().positive('Must be > 0!').required('REQUERED FIELD!'),
  dificulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('REQUERED FIELD!'),
});

export const RecipeForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        dificulty: 'easy',
      }}
      validationSchema={RecepieSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Image
          <Field name="image" />
          <ErrorMessage name="image" component="div" />
        </FormField>
        <FormField>
          Time
          <Field type="number" name="time" />
          <ErrorMessage name="time" component="div" />
        </FormField>
        <FormField>
          Servings
          <Field type="number" name="servings" />
          <ErrorMessage name="servings" component="div" />
        </FormField>
        <FormField>
          Calories
          <Field type="number" name="calories" />
          <ErrorMessage name="calories" component="div" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="dificulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage name="dificulty" component="div" />
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
