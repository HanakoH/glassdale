console.log("Keep up the good work Champ! ^-^");

import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js";
import { AlibiDialog } from "./criminals/AlibiDialog.js";
import { WitnessList } from "./witnesses/WitnessList.js";

OfficerList();
CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
NoteList();
WitnessList();

