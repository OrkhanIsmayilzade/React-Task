// import React, { useState } from 'react';
// import './App.css';

// function App() {
//     // useState hook-undan istifadə edərək form məlumatını qeyd et
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         passwordRetry: '',
//         termsAccepted: false
//     });

//     // Inputların dəyişiklikinə cavab vermək üçün event handler funksiyası
//     const handleChange = (e) => {
//         // Inputun adını, dəyərini və tipini almaq
//         const { name, value, type, checked } = e.target;
        
//         // setFormData funksiyası ilə mövcud form məlumatını yeniləmək
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     // Formun göndərilməsi üçün event handler funksiyası
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Form məlumatlarının bütün inputlarının dolu olub-olmamasını yoxlamaq
//         if (Object.values(formData).some(value => !value)) {
//             alert('Melumatlari tam doldurun');
//         } else {
//             // Burada form məlumatlarını istifadə etmək üçün əlavə əməliyyatlar yerinə yetirilə bilər
//             console.log('Form göndərildi:', formData);
//         }
//     };

//     // JSX ilə təsvir olunmuş komponentin quruluşu
//     return (
//         <div className='container'>
//             <div className='class-input'>
//                 <form onSubmit={handleSubmit}>
//                     {/* Hər input üçün event handler (handleChange) əlavə edilmişdir */}
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder='name'
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder='email'
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder='password'
//                     />
//                     <input
//                         type="password"
//                         name="passwordRetry"
//                         value={formData.passwordRetry}
//                         onChange={handleChange}
//                         placeholder='password-retry'
//                     />
//                     <br />
//                     <input
//                         type="checkbox"
//                         name="termsAccepted"
//                         checked={formData.termsAccepted}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="termsAccepted">Terms</label>
//                     <br />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default App;
