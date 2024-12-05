function Todoitem2() {

    let todoname = "Go to college";
    let tododate = "4/10/2023";


    return (
        <div class="container">

                <div class="row kg-row">
                <div class="col-5">{todoname}</div>
                <div class="col-4">{tododate}</div>
                <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
                </div>
        </div>

    )
}

export default Todoitem2;