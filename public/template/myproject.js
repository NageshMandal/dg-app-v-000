export const projectslistTemplate = `
<!-- Container for project list -->
<div id="projectListContainer" class="container mt-5">
    <h2>Projects</h2>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Team ID</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="projectList">
                <!-- Project data will be inserted here dynamically -->
            </tbody>
        </table>
    </div>
</div>
`