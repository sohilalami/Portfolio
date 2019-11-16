
  //modaal venster//
  const modaalVenster = {
    alleInhoud: document.querySelectorAll('.Content'),
    alleKnoppen: document.querySelectorAll('.Button'),
  
    background() {
      console.log("Achtergrond event");
      let achtergrond = document.createElement('div');
      achtergrond.classList.add('modaal-achtergrond');
      achtergrond.addEventListener('click', () => this.sluiten());
      return achtergrond;
    },
    modal() {
      console.log("Modaal event");
      let modaal = document.createElement('div');
      modaal.className = 'modaal';
      modaal.addEventListener('click', (evt) => evt.stopPropagation());
      return modaal;
    },
    closebutton() {
      console.log("Sluit knop event");
      let sluitknop = document.createElement('div');
      sluitknop.className = 'sluit-knop';
      sluitknop.innerHTML = '&#x00D7';
      sluitknop.addEventListener('click', () => this.sluiten());
      return sluitknop;
    },
    open(elem) {
      console.log("Open event");
      this.achtergrond = this.background();
      this.sluitKnop   = this.closebutton();
      this.modaal       = this.modal();
      this.modaal       .appendChild(this.sluitKnop);
      this.modaal       .appendChild(elem);
      this.achtergrond  .appendChild(this.modaal);
      document.body     .appendChild(this.achtergrond);
    },
    sluiten() {
      console.log("Sluit event");
      this.modaal       .innerHTML = '';
      document.body     .removeChild(this.achtergrond);
    }
  }
  
  for (let i= 0; i<modaalVenster.alleInhoud.length; i++) {
    console.log("Deleted event");
    modaalVenster.alleInhoud[i].parentNode.removeChild(modaalVenster.alleInhoud[i]);
  }
  for (let i= 0; i<modaalVenster.alleInhoud.length; i++) {
    modaalVenster.alleKnoppen[i].addEventListener('click', () => {
      console.log("Click event");
      let inhoud = modaalVenster.alleInhoud[i];
      modaalVenster.open(inhoud);
    })
  }
  