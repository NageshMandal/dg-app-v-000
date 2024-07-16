export const leadTemplate = `
<div class="container mt-5">
    <h2>Lead Form</h2>
    <form id="leadForm" method="POST" action="/leads">
        <div class="form-group">
            <label for="leadName">Name</label>
            <input type="text" class="form-control" id="leadName" name="name" required minlength="1" maxlength="100">
        </div>
        <div class="form-group">
            <label for="leadEmail">Email</label>
            <input type="email" class="form-control" id="leadEmail" name="email" required>
        </div>
        <div class="form-group">
            <label for="leadTeamId">Team ID</label>
            <input type="text" class="form-control" id="leadTeamId" name="teamId" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
`