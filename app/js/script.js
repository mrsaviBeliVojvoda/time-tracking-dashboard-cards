let dataObject = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

// If the data.JSON is on the server we can use following commented lines to load it

// fetch('http://localhost:3000/data.json')
   // .then((response) => response.json())
   // .then((json) => {
   //   dataObject = json;
   // handleChange();
   // }); 
    
handleChange();    

function handleChange() {
    // Get radiogroup value
   const selectedValue = document.querySelector('input[name="radio"]:checked').value;

    dataObject.forEach((activity, index) => {
        // Loop through array of objects and taking data depending of radiogroup value
        let current, previous, period;

        if (selectedValue === '1') {
            period = 'Day';
            current = activity.timeframes.daily.current;
            previous = activity.timeframes.daily.previous;
        } else if (selectedValue === '2') {
            period = 'Week'
            current = activity.timeframes.weekly.current;
            previous = activity.timeframes.weekly.previous;
        } else if (selectedValue === '3') {
            period = 'Month'
            current = activity.timeframes.monthly.current;
            previous = activity.timeframes.monthly.previous;
        }
                
        // Selecting data elements
        const activityElement = document.querySelector(`.card__activity[style="--i:${index + 1}"]`);

        // Writing data in the HTML elements
        if (activityElement) {
            activityElement.querySelector('.card__time').textContent = `${current}hrs`;
            activityElement.querySelector('.card__summary').textContent = `Last ${period} - ${previous}hrs`;
        }
    });
}