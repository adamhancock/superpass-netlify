import axios from 'axios'
export const state = () => ({
  password: "default"
})

export const mutations = {
  updatePassword(state, generatedPassword) {
    state.password = generatedPassword
  },

}

export const actions = {
  generatePassword(context) {
    axios.get(`${process.env.functions}/simple`).then((res) => {
      context.commit('updatePassword', res.data.password)
    })

  }
}
