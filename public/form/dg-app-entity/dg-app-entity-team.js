export const teamTemplate = `
<!-- HTML Form for Team -->
<div class="container mt-5">
    <h2>Team Form</h2>
    <form id="teamForm" method="POST" action="/teams">
        <div class="form-group">
            <label for="teamName">Name</label>
            <input type="text" class="form-control" id="teamName" name="name" required minlength="1" maxlength="100">
        </div>
        <div class="form-group">
            <label for="teamDescription">Description</label>
            <textarea class="form-control" id="teamDescription" name="description" maxlength="500"></textarea>
        </div>
        <div class="form-group">
            <label for="leadId">Lead ID</label>
            <input type="text" class="form-control" id="leadId" name="leadId" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
`