const modalMixin = {
  data: () => ({
    modalVisible: false
  }),
  methods: {
    showModal () {
      this.modalVisible = true
    console.log('tekst')
    },


    hideModal () {
      this.modalVisible = false
    }
  }
}

export default modalMixin
