import { useState, useEffect } from "react";

const API_URL = "/api/users";
const UserCrud = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    setUsers(result);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async(id)=>{
    if(window.confirm("Sei sicuro di voler coancellare questo utente?")){
       try{
            const response= await fetch(API_URL+"/"+id,{
                method:"DELETE"
            });
        if(!response.ok) throw new Error("La chiamata non è andata a buon fine");
        getUsers();
       }catch(err){
        console.log(err)
       }
    }
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">USER CRUD</h1>
      <div className="card shado-sm mb-4">
          <div className="card-body">
             <h2 className="card-title mb-4">Gestione utente</h2>
             <form >
         
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label fw-bold">Nome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="form-control"
                
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cognome" className="form-label fw-bold">Cognome *</label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                className="form-control"
                
                required
              />
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="telefono" className="form-label fw-bold">Telefono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="form-control"
                
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
               
                required
              />
            </div>
          </div>
          
      
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
            Salva dati
            </button>
            
           
          </div>
        </form>
          </div>
        </div>


      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              return (
                <tr key={u.id}>
                  <td>{u.nome}</td>
                  <td>{u.cognome}</td>
                  <td>{u.telefono}</td>
                  <td>{u.email}</td>
                  <td><button className="btn btn-danger" onClick={()=>handleDelete(u.id)}>Elimina</button></td>
                  <td><button></button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCrud