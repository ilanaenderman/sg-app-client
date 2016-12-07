
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Listing} from "../../shared/listing.model";
import {ApplicationTemplate} from "../../shared/models/application_template.model";
import {ApplicationTemplatesService} from "../../shared/services/application_templates.service";
import { AccordionModule } from 'ng2-bootstrap/components/accordion';

@Component({
    providers: [ApplicationTemplatesService],
    templateUrl: './application_templates.template.pug',
    styleUrls:['./application_templates.styles.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})

export class FrontApplicationTemplates implements OnInit{
    public listing: ApplicationTemplate[];
    public oneAtATime:boolean = true;
    public selectedTemplate;

    constructor(private _service:ApplicationTemplatesService) {}

    ngOnInit() {
        this._service.query(1,999).then(listing => this.listing = listing );//load all
    }

    selectedTemp(application_template:ApplicationTemplate){
        //to toggle font awesome arrow
        if(this.selectedTemplate === application_template){
            this.selectedTemplate = undefined;
        }else{
            this.selectedTemplate = application_template;
        }
    }

}