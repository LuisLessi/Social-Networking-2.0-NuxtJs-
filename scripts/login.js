
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
  item.addEventListener('click', function () {
    switchers.forEach(item => item.parentElement.classList.remove('is-active'))
    this.parentElement.classList.add('is-active')
  })
})


Vue.use(switchers)
/**export default {

data() {
  return {
    form: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  };
},

validations: {
  form: {
    name: {
      required,
    },

    email: {
      required,
      email,
    },

    password: {
      required,
    },

    confirmPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  }
}
}*/
