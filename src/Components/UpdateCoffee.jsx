import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, suplier, taste, catagory, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name, quantity, suplier, taste, catagory, details, photo}
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'coffee updated succsessfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <div>
          <h2 className=" text-3xl font-extrabold text-center">Update a Coffee</h2>
        </div>
  <form onSubmit={handleUpdateCoffee}>
      {/* name */}
      <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text">Coffee Name</span>
              </label>
              <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" required />
          </div>
          {/* quantity */}
          <div className="form-control w-1/2">
              <label className="label">
                  <span className="label-text">Available Quantity</span>
              </label>
              <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered w-full" required />
          </div>
         
      </div>
      {/* Suplier */}
      <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text">Suplier</span>
              </label>
              <input type="text" name="suplier" placeholder="Suplier" defaultValue={suplier} className="input input-bordered w-full" required />
          </div>
          {/* Taste */}
          <div className="form-control w-1/2">
              <label className="label">
                  <span className="label-text">Taste</span>
              </label>
              <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" required />
          </div>
         
      </div>
      {/* Catagory */}
      <div className="md:flex gap-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text">Catagory</span>
              </label>
              <input type="text" name="catagory" placeholder="Catagory" defaultValue={catagory} className="input input-bordered w-full" required />
          </div>
          {/* Details */}
          <div className="form-control w-1/2">
              <label className="label">
                  <span className="label-text">Details</span>
              </label>
              <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" required />
          </div>
         
      </div>
       {/* photo URL*/}
       <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="photo URL" defaultValue={photo} className="input input-bordered w-full mb-5" required />
          </div>
          <input className="btn btn-block bg-green-500" type="submit" value="Update coffee" />
  </form>
</div>
    );
};

export default UpdateCoffee;