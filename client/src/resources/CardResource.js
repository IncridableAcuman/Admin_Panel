import {UserPlus,Database,Code, Users, UserSquare, NotepadText, User, Calendar, Info, ChartBar, ChartPie, ChartLine, Mail} from 'lucide-react';

const CardRecourse=[
    {title:"Email Sent",icon:<Mail size={20}/>,count:11361,staticPrasent:14},
    {title:"Sales Obtained",icon:<Database size={20}/>,count:431225,staticPrasent:21},
    {title:"New Clients",icon:<UserPlus size={20}/>,count:32441,staticPrasent:5},
    {title:"Traffic Received",icon:<Code size={20}/>,count:1325134,staticPrasent:14}
]

const SidebarData=[
    {name:"Manage Team",icon:<Users size={20}/>},
    {name:"Contact Information",icon:<UserSquare size={20}/>},
    {name:"Invoice Balances",icon:<NotepadText size={20}/>},
]

const PagesData=[
    {name:"Profile Form",icon:<User size={20}/>},
    {name:"Calendar",icon:<Calendar size={20}/>},
    {name:"FAQ Page",icon:<Info size={20}/>},
]

const ChartData=[
    {name:"BarChart",icon:<ChartBar size={20}/>},
    {name:"PieChart",icon:<ChartPie size={20}/>},
    {name:"Line Chart",icon:<ChartLine size={20}/>},
    {name:"Geaography Chart",icon:<Map size={20}/>}
]

export  {CardRecourse,SidebarData,PagesData,ChartData};