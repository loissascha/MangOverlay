export namespace config {
	
	export class Element {
	    Name: string;
	    DisplayName: string;
	    Active: boolean;
	    Index: number;
	    IsCustom: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Element(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Name = source["Name"];
	        this.DisplayName = source["DisplayName"];
	        this.Active = source["Active"];
	        this.Index = source["Index"];
	        this.IsCustom = source["IsCustom"];
	    }
	}

}

