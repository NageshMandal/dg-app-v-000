export const ticketlistTemplate = `
<!-- Container for ticket list -->
<div id="ticketListContainer" class="container mt-5">
    <h2>Tickets</h2>
    <div class="table-responsive">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Project ID</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody id="ticketList">
                <!-- Ticket data will be inserted here dynamically -->
            </tbody>
        </table>
    </div>
</div>
`