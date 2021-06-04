const MainPanel = require('./app/panel/main-panel');

mainPanel = new MainPanel()

showMainWindow = () => {
    requestAnimationFrame(() => {
        document.body.appendChild(mainPanel.createElement());
    })
}

showMainWindow()

console.log("Yo")

/*



const DATEFORMAT = 'D MMM YYYY';

logger = new Logger();
connection = new Connection(logger);
window.localSettings = {}

dlgLogin = new LoginDialog();
dlgUser = new UserDialog();
icd10Coder = new Icd10CoderDialog();
admitWizard = new AdmissionWizard(
    {
        title: 'New Admission'
    }
);

tryLogin = () =>{    
    dlgLogin.tryLogin(
        () => {
            console.log("Login Sucessful.");
            //showMainWindow();
            startApp()
        },
        () => {
            console.log("Cancelled.")
        }
    );
}

logout = () => {
    document.body.innerText = "";
    connection.logout(
        () => {
            tryLogin();
        },
        () => {
            console.log("Logout Failed");
            tryLogin();
        }
    )
}

mainPanel = new MainPanel(
    () => {
        dlgUser.show(
            (data) => {
                connection.user.password = data.password
            },
            () => {
                console.log("Cancelled")
            }
        )
    },
    () => {
        logout();
    }
);
pnlPatientBrowser = new PatientBrowser();
dlgIcd10 = new Icd10CoderDialog();


loadSettings = (onDone, onFailed) => {
    window.localSettings = JSON.parse(localStorage.getItem('settings'))
    if (!window.localSettings) {
        console.log("Failed to load settings")
        onFailed()
        return
    }
    refreshSettings(onDone, onFailed)
}

refreshSettings = (onDone, onFailed) => {
    console.log("Refreshing Settings")

    if (!window.localSettings['hospital']['url']) {
        console.log("No Hospital URL")
        onFailed()
        return
    }
    if (!window.localSettings['department']['url']) {
        console.log("No Hospital URL")
        onFailed()
        return
    }

    var statusDialog = new StatusDialog()

    statusDialog.show(
        'Loading Settings...',
        'Please Wait.',
        false
    )

    console.log("Getting hospital")
    connection.get(
        window.localSettings['hospital']['url'],
        (hospital) => {
            console.log("Getting department")
            connection.get(
                window.localSettings['department']['url'],
                (department) => {
                    let updatedDate = {
                        ...window.localSettings,
                        'hospital': hospital,
                        'department': department,
                    }
                    saveSettings(updatedDate)
                    onDone()
                    statusDialog.hide()
                },
                (error) => {
                    console.log("Failed to get Department")
                    console.log(error)
                    onFailed()
                    statusDialog.hide()
                },
            )
        },
        () => {
            console.log("Failed to get Hospital")
            onFailed()
            statusDialog.hide()
        }
    )

}

saveSettings = (data) => {
    localStorage.setItem('settings', JSON.stringify(data))
    window.localSettings = data
}


startApp = () => {
    loadSettings(
        () => {
            showMainWindow()
        },
        () => {
            let settingsDialog = new InitialLocalSettingsDialog()
            settingsDialog.show(
                (data) => {
                    settingsDialog.hide()
                    refreshSettings(
                        () => {
                            showMainWindow()
                        },
                        () => {
                            console.log("Refresh Failed")
                        }
                    )
                },
                () => {
                    console.log("Cancelled")
                }
            )
        }
    )
}




tryLogin();
*/



//document.body.appendChild(pnlPatientBrowser.createElement());
    /*
    document.body.appendChild(dlgIcd10.createElement());
    dlgIcd10.show(
        (value) => {
            console.log(value);
        },
        () => {
            console.log("Cancelled");
        }
    )
    */

/*
const Icd10CoderDialog = require('./app/dialog/icd10coder-dialog');



document.body.appendChild(icd10.createElement());

icd10.show(
    (value) => {
        console.log(value);
    },
    () => {
        console.log("Cancelled");
    }
);*/


/*
const ListBox =  require('./controls/list-box');
const TextBox = require('./controls/text-box');

var lst = new ListBox(
    (item) => {
        return item.id;
    },
    (item) => {
        return item.label;
    },
    (item) => {
        console.log(item);
    },
    {
        height: '100px'
    }
);

document.body.appendChild(lst.createElement());
var data = []
for (var i = 0; i < 100; i++) {
    data.push({
        id: i,
        label: i
    })
}
lst.setData(data);

txt = new TextBox();
document.body.appendChild(txt.createElement());
txt.element.addEventListener('keyup', (evt) => {
    lst.setSelection(txt.value());
    console.log(txt.value());
})


const RadioListBox = require('./controls/radio-list-box');

var radlst = new RadioListBox(
    (item) => {
        return item.id;
    },
    (item) => {
        return item.label;
    },
    (item) => {
        console.log(item);
    },
    {
        height: '100px'
    }
);

document.body.appendChild(radlst.createElement());
var data = []
for (var i = 0; i < 100; i++) {
    data.push({
        id: i,
        label: 'LBL' + i
    })
}
radlst.setData(data);

radtxt = new TextBox();
document.body.appendChild(radtxt.createElement());
radtxt.element.addEventListener('keyup', (evt) => {
    radlst.setSelection(radtxt.value());
    console.log(txt.value());
})


//Select *********************************
const Select = require('./controls/select');

sel = new Select(
    (item) => {
        return item.id;
    },
    (item) => {
        return item.label;
    },
    {
        placeholder: 'Modifier'
    }
);

document.body.appendChild(sel.createElement());

sel.setData(data);


const Button = require('./controls/button');

btn = new Button(
    'Select Value',
    (ev) => {
        console.log(sel.value());
    }
)

document.body.appendChild(btn.createElement());


btn = new Button(
    'Set',
    (ev) => {
        sel.setSelection(20);
    }
)
document.body.appendChild(btn.createElement());


//Select Field ************************************

const SelectField = require('./controls/form/select-field');

selF = new SelectField(
    'number',
    (item) => {
        return item.id;
    },
    (item) => {
        return item.label;
    },
    {
        placeholder: 'Modifier',
        label: 'Modifier'
    }
)

document.body.appendChild(selF.createElement());

selF.setData(data);

btn = new Button(
    'Lock',
    (ev) => {
        selF.lock();
    }
)
document.body.appendChild(btn.createElement());

btn = new Button(
    'unlock',
    (ev) => {
        selF.unlock();
    }
)
document.body.appendChild(btn.createElement());

btn = new Button(
    'Set',
    (ev) => {
        selF.setValue(data[10]);
    }
)
document.body.appendChild(btn.createElement());

btn = new Button(
    'Get',
    (ev) => {
        console.log(selF.value());
    }
)
document.body.appendChild(btn.createElement());
*/


//Splitter Windo
/*
const Control = require('./controls/control');
const Splitter = require('./controls/splitter');
const ListBox = require('./controls/list-box');

p01 = new ListBox();
p02 = new ListBox();

p1 = new ListBox(
    (item) => {
        return item.id;
    },
    (item) => {
        return item.label;
    },
    (item) => {
        console.log(item);
    },
);
p2 = new Splitter(p01, p02, {
    pane2Size: '200px',
    direction: 'column',
    resizable: true
})

//p2 = new Control();

spl = new Splitter(p1, p2, {
    pane2Size: '250px',
    //direction: 'column'
    resizable: true
});

document.body.appendChild(spl.createElement());


var data = []
for (var i = 0; i < 100; i++) {
    data.push({
        id: i,
        label: 'LBL' + i
    })
}
p1.setData(data);
p1.element.style.border = 'none';
p1.element.style.borderRadius = '0';

*/


/*
const PatientBrowser = require('./app/panel/patient-browser');

b = new PatientBrowser();

document.body.appendChild(b.createElement());
*/