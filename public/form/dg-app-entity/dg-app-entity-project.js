export const projectTemplate = `
<div class="container mt-5">
    <h2>Project Form</h2>
    <form id="projectForm" method="POST" action="/projects">
        <div class="form-group">
            <label for="projectName">Name</label>
            <input type="text" class="form-control" id="projectName" name="name" required minlength="1" maxlength="100">
        </div>
        <div class="form-group">
            <label for="projectDescription">Description</label>
            <textarea class="form-control" id="projectDescription" name="description" maxlength="500"></textarea>
        </div>
        <div class="form-group">
            <label for="projectStartDate">Start Date</label>
            <input type="date" class="form-control" id="projectStartDate" name="startDate" required>
        </div>
        <div class="form-group">
            <label for="projectEndDate">End Date</label>
            <input type="date" class="form-control" id="projectEndDate" name="endDate">
        </div>
        <div class="form-group">
            <label for="projectTeamId">Team ID</label>
            <input type="text" class="form-control" id="projectTeamId" name="teamId" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
`