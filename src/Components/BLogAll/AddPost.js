import Modal from "react-modal"
import { useState,useEffect } from "react"

import Swal from 'sweetalert2'
function AddPost(props) {
  const { onReload } = props;
  const Swal = require('sweetalert2');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [dataCategory,setDataCategory] = useState([]);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  function closeModal() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/posts",{
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      if(data) {
        setShowModal(false);
        onReload();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You added a one post",
          showConfirmButton: false,
          timer: 2000
        });
      }
      
    })

  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    });

  }


  return (
    <>

      <button onClick={openModal}>+ Add one post</button>
      <Modal
        isOpen={showModal}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  Title
                </td>
                <td>
                  <input type="text" name="title" onChange={handleChange} required />
                </td>
              </tr>
             
             
            
            
            
              <tr>
                <td>
                Description
                </td>
                <td>
                  <textarea rows={4} name="description" onChange={handleChange} required></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  Date
                </td>
                <td>
                 <input type="date"/>
                </td>
              </tr>
              <tr>

                <td>
                  <button onClick={closeModal}>Cancel</button>
                </td>
                <td>
                  <input type="submit" value="Add new" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>

      </Modal>

    </>
  )
}
export default AddPost;
