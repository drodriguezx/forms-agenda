import "./App.css";

function App() {
  return (
    <div>
    <form>
      <h1> Agenda de contato</h1>
     <label>
    Nome:
    <input type="text" name="name" placeholder= "Nome" required />
  </label>
  <label>
      Email:
    <input type="email" name="" placeholder= "Email" required />
  </label>
  <label>
    Telefone:
    <input type="number" name="code" placeholder= "Telefone" required/>
  </label>
  <button type="submit"> Cadastrar</button>
</form>
</div>
)}

export default App;
