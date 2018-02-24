<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Companies</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>
          <v-btn icon @click="addCompany">
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form
          v-if="editItem"
          v-model="valid"
          ref="companyForm"
          lazy-validation
        >
          <v-text-field
            label="Name"
            v-model="company.name"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            label="Description"
            v-model="company.description"
            textarea
          ></v-text-field>
          <v-btn
            @click="submit"
            :disabled="!valid"
          >
            submit
          </v-btn>
          <v-btn
            @click="clear"
          >
            clear
          </v-btn>
        </v-form>
        <v-list>
          <v-list-tile avatar v-for="item in items" v-bind:key="item.name" @click="selectCompany(item)">
            <v-list-tile-content>
              <v-list-tile-title v-text="item.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img v-bind:src="item.imageURL"/>
            </v-list-tile-avatar>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Companies',
  computed: {
    items: function () { return this.$store.state.companies }
  },
  data: function () {
    return {
      editItem: false,
      valid: true,
      company: {
        name: '',
        alternateNames: [],
        image: null,
        description: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ]
    }
  },
  methods: {
    selectCompany: function (item) {
      console.log(this.items)
      this.$store.dispatch('loadCompany', item._id).then(() => {
        console.log('Company loaded')
        console.log(this.$store.state.message)
        console.log('Company')
        console.log(this.$store.state.company)
        let c = this.$store.state.company
        this.company = {
          _id: c._id,
          name: c.name,
          alternateNames: c.alternateNames,
          image: c.image,
          description: c.description
        }
        console.log(this.company)
        this.editItem = true
      })
    },
    addCompany: function () {
      this.company = {
        name: '',
        alternateNames: [],
        image: null,
        description: ''
      }
      this.editItem = true
    },
    loadCompanies: function () {
      this.$store.dispatch('loadCompanies').then(() => {
        console.log('Companies loaded')
        console.log(this.$store.state.message)
        console.log('Companies')
        console.log(this.$store.state.companies)
      })
    },
    submit: function () {
      if (this.$refs.companyForm.validate()) {
        this.$store.dispatch('saveCompany', this.company).then(() => {
          console.log(this.company)
          console.log('Company saved')
          this.loadCompanies()
          this.editItem = false
          alert('Saved')
        })
      }
    },
    clear: function () {
      this.company = {}
      this.$refs.companyForm.reset()
      this.editItem = false
    }
  },
  mounted: function () {
    this.loadCompanies()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
