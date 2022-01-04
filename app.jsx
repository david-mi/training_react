let n = 0;
const app = document.getElementById('app');
let asc = true;
let gay = false;

// function render() {

//   const title = React.createElement('h1', {}, 'Bonjour les amis', 'Test',
//     React.createElement('span', {}, n++));

//   ReactDOM.render(title, app);
// }

// render();

// window.setInterval(render, 1000);



// function render() {
//   const items = [
//     'Tache 1',
//     'Tache 2',
//     'Tache 3'
//   ];

//   const title =
//     <>
//       <h1>Bonjour les amis
//         <span>{n}</span>
//       </h1>
//       <ul>
//         {items.map((e, i) => <li key={i}>{e}</li>)}
//       </ul>
//     </>;

//   ReactDOM.render(title, app);
// }


// render();

const membersArr = [{
  nom: 'Michel',
  prenom: 'David'
},
{
  nom: 'couilles',
  prenom: 'tg%'
},
{
  nom: 'Michel',
  prenom: 'Viviane'
},
{
  nom: 'Potter',
  prenom: 'Harry'
},
{
  nom: 'Michel',
  prenom: 'Couilles'
}
];

const isMichel = (nom) => nom == 'Michel' ? <b>{nom} 😎</b> : nom;

function family() {
  let members = membersArr.map((m, i) =>
    <ul key={i}>
      <li>NOM: {isMichel(m.nom)}</li>
      <li>PRENOM:{m.prenom}</li>
    </ul>
  );

  let list = <ul>{members}</ul>;

  ReactDOM.render(list, app);

}

family();



