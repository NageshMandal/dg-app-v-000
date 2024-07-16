export const leadlistTemplate = `
<!-- Container for lead list -->
<div id="leadListContainer" class="container mt-5">
    <h2>Leads</h2>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Team ID</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="leadList">
                <!-- Lead data will be inserted here dynamically -->
            </tbody>
        </table>
    </div>
</div>
`