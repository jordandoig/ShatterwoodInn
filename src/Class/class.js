import React, { Component } from 'react';
import Axios from 'axios';
import './class.css';

const classList = [
  {
    id: 1,
    imgUrl: 'http://2.bp.blogspot.com/-6QZ_ClBRnmQ/U_Gxds7eNFI/AAAAAAAAB30/p0FoY9ZEn6k/s1600/Sidharth%2BChaturvedi%2B-%2BBarbarian.png',
    desc: "A fierce warrior of primitive background who can enter a battle rage",
    primary_ability: 'Strength',
  },
  {
    id: 2,
    imgUrl: 'http://i.imgur.com/jc5Syoa.jpg',
    desc: "An inspiring magician whose power echoes the music of creation",
    primary_ability: 'Charisma',
  },
  {
    id: 3,
    imgUrl: 'http://vignette2.wikia.nocookie.net/forgottenrealms/images/3/32/Cleric_PHB5e.jpg/revision/latest?cb=20140921191521',
    desc: "A priestly champion who wields divine magic in service of a higher power",
    primary_ability: 'Wisdom',
  },
  {
    id: 4,
    imgUrl: 'http://vignette3.wikia.nocookie.net/forgottenrealms/images/5/50/Druid_PHB5e.jpg/revision/latest?cb=20140921091402',
    desc: "A priest of the Old Faith, wielding the powers of nature— moonlight and plant growth, fire and lightning— and adopting animal forms",
    primary_ability: 'Wisdom',
  },
  {
    id: 5,
    imgUrl: 'http://vignette1.wikia.nocookie.net/forgottenrealms/images/7/76/Fighter_PHB5e.jpg/revision/latest?cb=20140921091611',
    desc: "A master of martial combat, skilled with a variety of weapons and armor",
    primary_ability: 'Strength or Dexterity',
  },
  {
    id: 6,
    imgUrl: 'https://i2.wp.com/nerdarchy.com/wp-content/uploads/2015/11/monk-2.jpg?ssl=1',
    desc: "An master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
    primary_ability: 'Dexterity and Wisdom',
  },
  {
    id: 7,
    imgUrl: 'https://www.dandwiki.com/w/images/6/6a/Paladin_silver_hand.jpg',
    desc: "A holy warrior bound to a sacred oath",
    primary_ability: 'Strength and Charisma',
  },
  {
    id: 8,
    imgUrl: 'http://vignette1.wikia.nocookie.net/forgottenrealms/images/b/bd/Ranger_Aaron-Miller_PHB5e.jpg/revision/latest?cb=20140914204615',
    desc: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
    primary_ability: 'Dexterity and Wisdom',
  },
  {
    id: 9,
    imgUrl: 'http://vignette2.wikia.nocookie.net/forgottenrealms/images/c/c0/Rogue_PHB5e.jpg/revision/latest?cb=20140921185102',
    desc: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
    primary_ability: 'Dexterity',
  },
  {
    id: 10,
    imgUrl: 'http://i.imgur.com/hWnlV6c.jpg',
    desc: "A spellcaster who draws on inherent magic from a gift or bloodline",
    primary_ability: 'Charisma',
  },
  {
    id: 11,
    imgUrl: 'http://vignette4.wikia.nocookie.net/forgottenrealms/images/3/3e/Warlock_PHB5e.png/revision/latest?cb=20140912010808',
    desc: "A wielder of magic that is derived from a bargain with an extraplanar entity",
    primary_ability: 'Charisma',
  },
  {
    id: 12,
    imgUrl: 'https://i2.wp.com/www.critical-hits.com/wp-content/uploads/2015/03/Wizard_PHB5e1.jpg',
    desc: "A scholarly magic-user capable of manipulating the structures of reality",
    primary_ability: 'Intelligence',
  }
];

class Classes extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedClass: null
    }
  }

  componentDidMount () {
    this.getClasses();
  }

  componentDidUpdate () {
    this.shouldChange();
  }

  getClasses () {
    Axios.get('https://galvanize-cors.herokuapp.com/http://www.dnd5eapi.co/api/classes/').then(data => {
      let classData = data.data.results.map((item, index) => {
        return {
          id: classList[index].id,
          name: item.name,
          apiUrl: item.url,
          desc: classList[index].desc,
          primaryAbility: classList[index].primary_ability,
          imgUrl: classList[index].imgUrl
        }
      });
      this.props.handleChange(classData);
    })
  }

  getSelectedClass () {
    Axios.get('https://galvanize-cors.herokuapp.com/http://www.dnd5eapi.co/api/classes/' + this.props.currentSelection.toLowerCase()).then(data => {
      this.setState({selectedClass: data.data})
    })
  }

  shouldChange () {
    if (this.props.currentSelection && !this.state.selectedClass) {
      this.getSelectedClass();
    } else if (this.state.selectedClass !== null) {
      if (this.state.selectedClass.name !== this.props.currentSelection) {
        this.getSelectedClass();
      }
    }
  }

  render() {
    if (this.state.selectedClass) {
      return (
        <div className="Class-main">
          <section className="Class-data">
            <h1>{this.state.selectedClass.name}</h1>
          </section>
        </div>
      )
    } else {
      return (
        <div className="Loading">
          {/* Loader to go here */}
        </div>
      )
    }
  }
}

export default Classes;
