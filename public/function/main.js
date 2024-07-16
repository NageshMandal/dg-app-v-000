import { dashboardTemplate } from '../template/dashboard.js';
import { openTicketsTemplate } from '../template/openticket.js';
import { closedTicketsTemplate } from '../template/closeticket.js';
import { resentActivityTemplate } from '../template/resentActivity.js';
import { orgTemplate } from '../form/dg-app-entity/dg-app-entity-org.js';
import { leadTemplate } from '../form/dg-app-entity/dg-app-entity-lead.js';
import { projectTemplate } from '../form/dg-app-entity/dg-app-entity-project.js';
import { teamTemplate } from '../form/dg-app-entity/dg-app-entity-team.js';
import { ticketTemplate } from '../form/dg-app-entity/dg-app-entity-ticket.js';
import { organizationsTemplate } from '../template/myorg.js';
import { teamlistTemplate } from '../template/myteam.js'
import { projectslistTemplate } from '../template/myproject.js'
import { leadlistTemplate } from '../template/mylead.js'
import { ticketlistTemplate } from '../template/myticket.js'

document.addEventListener('DOMContentLoaded', () => {
    const templates = {
        dashboard: dashboardTemplate,
        openTickets: openTicketsTemplate,
        closedTickets: closedTicketsTemplate,
        resentActivity: resentActivityTemplate,
        org: orgTemplate,
        lead: leadTemplate,
        project: projectTemplate,
        team: teamTemplate,
        ticket: ticketTemplate,
        organization: organizationsTemplate,
        teamlist: teamlistTemplate,
        projectlist: projectslistTemplate,
        leadlist: leadlistTemplate,
        ticketlist: ticketlistTemplate
    };

    const loadTemplate = (template) => {
        document.getElementById('dg-app-user-content').innerHTML = template;
    };

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('data-target');
            if (templates[target]) {
                loadTemplate(templates[target]);
            }
        });
    });

    // Load the default template
    loadTemplate(templates.dashboard);
});
