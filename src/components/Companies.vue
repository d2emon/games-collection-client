<template>
  <v-layout row wrap>
    <v-dialog
      v-model="ask"
      persistent
      max-width="400px"
    >
      <v-card>
        <v-card-title class="headline">{{ company.name }}</v-card-title>
        <v-card-text>
          Do you really want to delete "{{ company.name }}"?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="closeDialog(true)">Yes</v-btn>
          <v-btn color="error" @click="closeDialog(false)">No</v-btn>
        </v-card-actions> 
      </v-card>
    </v-dialog>
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
            <v-btn icon @click.stop="delCompany(item)">
              <v-icon>delete</v-icon>
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
      ask: false,
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
    loadCompany: function (item) {
      if (!item) {
        this.company = {
          name: '',
          alternateNames: [],
          image: null,
          description: ''
        }
        return
      }

      this.company = {
        _id: item._id,
        name: item.name,
        alternateNames: item.alternateNames,
        image: item.image,
        description: item.description
      }
    },
    selectCompany: function (item) {
      console.log(this.items)
      this.$store.dispatch('loadCompany', item._id).then(() => {
        console.log('Company loaded')
        console.log(this.$store.state.message)
        console.log('Company')
        console.log(this.$store.state.company)
        this.loadCompany(this.$store.state.company)
        console.log(this.company)
        this.editItem = true
      })
    },
    addCompany: function () {
      this.loadCompany(null)
      this.editItem = true
    },
    delCompany: function (item) {
      console.log(item)
      this.loadCompany(item)
      this.ask = true
    },
    loadCompanies: function () {
      this.$store.dispatch('loadCompanies').then(() => {
        console.log('Companies loaded')
        console.log(this.$store.state.message)
        console.log('Companies')
        console.log(this.$store.state.companies)
      })
    },
    closeDialog: function (yes) {
      this.ask = false
      if (!yes) return
      this.$store.dispatch('delCompany', this.company).then(() => {
        console.log(this.company)
        console.log('Company deleted')
        this.loadCompanies()
        this.editItem = false
        alert('Deleted')
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
