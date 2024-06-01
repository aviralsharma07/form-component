// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "./Form.css";

// const FormComponent = ({ formConfig }) => {
//   const validationSchema = Yup.object(
//     formConfig.reduce((schema, field) => {
//       let validator;

//       if (field.type === "checkbox") {
//         validator = Yup.array().of(Yup.string());
//       } else if (field.type === "file") {
//         validator = Yup.mixed().test("fileFormat", "Unsupported Format", (value) => {
//           if (value && value.type) {
//             const fileFormatSupported = field.fileFormatSupported || [];
//             const fileType = `.${value.type.split("/").pop()}`;
//             return fileFormatSupported.includes(fileType);
//           }
//           return true;
//         });
//       } else {
//         validator = Yup.string();
//         if (field.required) {
//           validator = validator.required(`${field.name} is required`);
//         }
//         if (field.regex) {
//           validator = validator.matches(new RegExp(field.regex), "Invalid format");
//         }
//       }

//       return {
//         ...schema,
//         [field.id]: validator,
//       };
//     }, {})
//   );

//   const handleSubmit = (values) => {
//     console.log("Form values:", values);
//     alert("Form submitted successfully");
//   };

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={formConfig.reduce((values, field) => {
//           if (field.type === "checkbox") {
//             values[field.id] = [];
//           } else {
//             values[field.id] = "";
//           }
//           return values;
//         }, {})}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {() => (
//           <Form>
//             {formConfig.map((field) => (
//               <div key={field.id} className="form-group">
//                 <label htmlFor={field.id}>{field.name}</label>
//                 {field.type === "text" && <Field type="text" name={field.id} />}
//                 {field.type === "password" && <Field type="password" name={field.id} />}
//                 {field.type === "select" && (
//                   <Field as="select" name={field.id} multiple={field.multiSelect}>
//                     {field.options.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </Field>
//                 )}
//                 {field.type === "radio" &&
//                   field.options.map((option) => (
//                     <label key={option.value}>
//                       <Field type="radio" name={field.id} value={option.value} />
//                       {option.label}
//                     </label>
//                   ))}
//                 {field.type === "checkbox" &&
//                   field.options.map((option) => (
//                     <label key={option.value}>
//                       <Field type="checkbox" name={field.id} value={option.value} />
//                       {option.label}
//                     </label>
//                   ))}
//                 {field.type === "file" && <Field type="file" name={field.id} />}
//                 <ErrorMessage name={field.id} component="div" className="error-message" />
//               </div>
//             ))}
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default FormComponent;

//!-----------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Form.css";

// const FormComponent = ({ formConfig }) => {
//   const [submittedData, setSubmittedData] = useState(null);

//   useEffect(() => {
//     const storedData = localStorage.getItem("submittedFormData");
//     if (storedData) {
//       setSubmittedData(JSON.parse(storedData));
//     }
//   }, []);

//   const validationSchema = Yup.object(
//     formConfig.reduce((schema, field) => {
//       let validator;

//       if (field.type === "checkbox") {
//         validator = Yup.array().of(Yup.string());
//       } else if (field.type === "file") {
//         validator = Yup.mixed().test("fileFormat", "Unsupported Format", (value) => {
//           if (value && value.type) {
//             const fileFormatSupported = field.fileFormatSupported || [];
//             const fileType = `.${value.type.split("/").pop()}`;
//             return fileFormatSupported.includes(fileType);
//           }
//           return true;
//         });
//       } else {
//         validator = Yup.string();
//         if (field.required) {
//           validator = validator.required(`${field.name} is required`);
//         }
//         if (field.regex) {
//           validator = validator.matches(new RegExp(field.regex), "Invalid format");
//         }
//       }

//       return {
//         ...schema,
//         [field.id]: validator,
//       };
//     }, {})
//   );

//   const handleSubmit = (values) => {
//     console.log("Form values:", values);
//     localStorage.setItem("submittedFormData", JSON.stringify(values));
//     setSubmittedData(values);
//     toast.success("Form submitted successfully");
//   };

//   const handleFileDownload = (file) => {
//     if (file) {
//       const url = URL.createObjectURL(file);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = file.name;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     }
//   };

//   return (
//     <div className="form-wrapper">
//       <ToastContainer />
//       <div className="form-container">
//         <Formik
//           initialValues={formConfig.reduce((values, field) => {
//             if (field.type === "checkbox") {
//               values[field.id] = [];
//             } else {
//               values[field.id] = "";
//             }
//             return values;
//           }, {})}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ setFieldValue }) => (
//             <Form>
//               {formConfig.map((field) => (
//                 <div key={field.id} className="form-group">
//                   <label htmlFor={field.id}>{field.name}</label>
//                   {field.type === "text" && <Field type="text" name={field.id} />}
//                   {field.type === "password" && <Field type="password" name={field.id} />}
//                   {field.type === "select" && (
//                     <Field as="select" name={field.id} multiple={field.multiSelect}>
//                       {field.options.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </Field>
//                   )}
//                   {field.type === "radio" &&
//                     field.options.map((option) => (
//                       <label key={option.value}>
//                         <Field type="radio" name={field.id} value={option.value} />
//                         {option.label}
//                       </label>
//                     ))}
//                   {field.type === "checkbox" &&
//                     field.options.map((option) => (
//                       <label key={option.value}>
//                         <Field type="checkbox" name={field.id} value={option.value} />
//                         {option.label}
//                       </label>
//                     ))}
//                   {field.type === "file" && (
//                     <input
//                       type="file"
//                       name={field.id}
//                       onChange={(event) => {
//                         setFieldValue(field.id, event.currentTarget.files[0]);
//                       }}
//                     />
//                   )}
//                   <ErrorMessage name={field.id} component="div" className="error-message" />
//                 </div>
//               ))}
//               <button type="submit" className="submit-button">
//                 Submit
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//       {submittedData && (
//         <div className="submitted-data">
//           <h2>Submitted Data</h2>
//           <pre>{JSON.stringify(submittedData, null, 2)}</pre>
//           {submittedData.file && <button onClick={() => handleFileDownload(submittedData.file)}>Download File</button>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FormComponent;

import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";

const FormComponent = ({ formConfig }) => {
  const [submittedData, setSubmittedData] = useState(null);
  const [showSubmittedData, setShowSubmittedData] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("submittedFormData");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);

  const validationSchema = Yup.object(
    formConfig.reduce((schema, field) => {
      let validator;

      if (field.type === "checkbox") {
        validator = Yup.array().of(Yup.string());
      } else if (field.type === "file") {
        validator = Yup.mixed().test("fileFormat", "Unsupported Format", (value) => {
          if (value && value.type) {
            const fileFormatSupported = field.fileFormatSupported || [];
            const fileType = `.${value.type.split("/").pop()}`;
            return fileFormatSupported.includes(fileType);
          }
          return true;
        });
      } else {
        validator = Yup.string();
        if (field.required) {
          validator = validator.required(`${field.name} is required`);
        }
        if (field.regex) {
          validator = validator.matches(new RegExp(field.regex), "Invalid format");
        }
      }

      return {
        ...schema,
        [field.id]: validator,
      };
    }, {})
  );

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    localStorage.setItem("submittedFormData", JSON.stringify(values));
    setSubmittedData(values);
    setShowSubmittedData(true);
    toast.success("Form submitted successfully");
  };

  const handleFileDownload = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    localStorage.removeItem("submittedFormData");
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <div className="form-container">
        <Formik
          initialValues={formConfig.reduce((values, field) => {
            if (field.type === "checkbox") {
              values[field.id] = [];
            } else {
              values[field.id] = "";
            }
            return values;
          }, {})}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {formConfig.map((field) => (
                <div key={field.id} className="form-group">
                  <label htmlFor={field.id}>{field.name}</label>
                  {field.type === "text" && <Field type="text" name={field.id} />}
                  {field.type === "password" && <Field type="password" name={field.id} />}
                  {field.type === "select" && (
                    <Field as="select" name={field.id} multiple={field.multiSelect}>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                  )}
                  {field.type === "radio" &&
                    field.options.map((option) => (
                      <label key={option.value}>
                        <Field type="radio" name={field.id} value={option.value} />
                        {option.label}
                      </label>
                    ))}
                  {field.type === "checkbox" &&
                    field.options.map((option) => (
                      <label key={option.value}>
                        <Field type="checkbox" name={field.id} value={option.value} />
                        {option.label}
                      </label>
                    ))}
                  {field.type === "file" && (
                    <input
                      type="file"
                      name={field.id}
                      onChange={(event) => {
                        setFieldValue(field.id, event.currentTarget.files[0]);
                      }}
                    />
                  )}
                  <ErrorMessage name={field.id} component="div" className="error-message" />
                </div>
              ))}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {showSubmittedData && (
        <div className="submitted-data">
          <h2>
            Submitted Data
            <button className="close-btn" onClick={() => setShowSubmittedData(false)}>
              X
            </button>
          </h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          {submittedData && submittedData.file && <button onClick={() => handleFileDownload(submittedData.file)}>Download File</button>}
          <button onClick={handleResetForm}>Reset Form</button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
