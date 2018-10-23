var app = new Vue({
  el: '#app',
  data: {
    firstName: "Ruslana",
    lastName: "Tsyba",
    description: "Je suis étudiante à l'Ecole de Journalisme de SciencesPo",
    photo: "photo.jpg",
    twitter: "ruslana_tsyba",
    github: "lanatsyba",
    mail: "ruslana.tsyba@sciencespo.fr",
    experiences: [ {
      dateBegin: "Août 2018",
      dateEnd: false,
      name: "AFP",
      title: "Stagiaire",
      description: false
    }, {
      dateBegin: "Mai 2018",
      dateEnd: "Juillet 2018",
      name: "Are We Europe",
      title: "Stagiaire",
      description: false
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "Août 2019",
      name: "Master Journalisme",
      university: "Sciences Po "
    }, {
      dateBegin: "2011",
      dateEnd: "2015",
      name: "Licence de philologie espagnole et anglaise, d’enseignement de   la langue espagnole et de littérature étrangère",
      university: "Université nationale Taras-Chevtchenko de Louhansk (Ukraine)"
    }],
    languages: ["Anglais", "Français","Russe","Ukrainien"],
    skills: ["SCSS", "HTML","JavaScript"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})