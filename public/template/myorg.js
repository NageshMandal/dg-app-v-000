export const organizationsTemplate = `
<!-- Container for organization list -->
<div id="organizationListContainer" class="container mt-5">
    <h2>Organizations</h2>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="organizationList">
                <!-- Organization data will be inserted here dynamically -->
            </tbody>
        </table>
    </div>
</div>
`