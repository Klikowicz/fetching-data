
const Students = props => {
 

  return ( 
      <section className="box">
        <section>
          <em>Id:</em> <strong className="colorPurple">{props.id}</strong>
        </section>
        <section>
          <em>Nazwisko ucznia:</em> <strong className="colorPurple">{props.name} {props.surname}</strong>
        </section>
        <section>
          <em>Klasa:</em> <strong className="colorPurple">{props.class}</strong>
        </section>
        <section>
          <em>E-mail:</em> <strong className="colorPurple">{props.mail}</strong>
        </section>
      </section>
  );
}
 
export default Students;