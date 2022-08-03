export interface NavMenu{
    name: string;
    route: string;
    toolTip: string;
    icon: string;
}


export const sidebarMenu:NavMenu[]=[
    {name:"List", route:"list", toolTip:"List", icon:"list"},
    {name:"Task", route:"task", toolTip:"Task", icon:"task"},
    {name:"Funny", route:"funny", toolTip:"Funny", icon:"games"},
];