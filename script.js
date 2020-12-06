const testimonials = [
   {
      name: 'Tanya Sinclair',
      job: 'UX Engineer',
      photo: './images/image-tanya.jpg',
      caption: `
                  “ I’ve been interested in coding for a while but never taken the jump, until now.
                  I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                  excited about the future. ”
               `
   },
   {
      name: 'John Tarkpor',
      job: 'Junior Front-end Developer',
      photo: './images/image-john.jpg',
      caption: `
                  “ If you want to lay the best foundation possible I’d recommend taking this course.
                  The depth the instructors go into is incredible. I now feel so confident about
                  starting up as a professional developer. ”
               `
   }
]

const buttons = document.querySelectorAll('.btn-control');
const figureElement = document.querySelector('.figure');
let index = 0;

function handleTestimonials() {
   // tombol button yg diklik saat ini
   const currentButton = this;

   // cek jika elemen button yg diklik saat ini idnya adalah prev
   if (currentButton.id === 'prev') {
      index -= 1;
      index < 0 ? index = testimonials.length - 1 : index;
   }

   // cek jika elemen button yg diklik saat ini idnya adalah next
   if (currentButton.id === 'next') {
      index += 1;
      index > testimonials.length - 1 ? index = 0 : index;
   }

   // elemen didalam figure yang dibutuhkan untuk diubah
   const photoImg = figureElement.querySelector('.figure-img');
   const textWrapper = figureElement.querySelector('.text-wrapper');
   const quote = figureElement.querySelector('#quote');
   const name = figureElement.querySelector('.name');
   const job = figureElement.querySelector('.job');

   // ubah element yang ada didalam figure sesuai dengan testimonial saat ini
   photoImg.src = testimonials[index].photo;
   quote.textContent = testimonials[index].caption;
   name.textContent = testimonials[index].name;
   job.textContent = testimonials[index].job;

   // tambahkan class fade-in untuk memunculkan animasinya
   photoImg.classList.add('fade-in')
   textWrapper.classList.add('fade-in');

   // hapus class fade-in setelah 500ms unutk menghapus animasinya
   setTimeout(() => {
      photoImg.classList.remove('fade-in');
      textWrapper.classList.remove('fade-in');
   }, 500)
}

buttons.forEach(button => button.addEventListener('click', handleTestimonials));