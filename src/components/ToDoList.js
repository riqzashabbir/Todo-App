import React from 'react'

const ToDoList = () => {
	const lists =  [
        {
          Id: Math.random(),
          Name: "Tony Stark",
          Occupation: "Iron Man",
          Description:
            "SuperHero, PlayBoy, Billionaire, Philanthropist, Genious"
        },
        {
          Id: Math.random(),
          Name: "Steve Rogers",
          Occupation: "Captain America",
          Description: "SuperHero, Captain, Soldier "
        },
        {
          Id: Math.random(),
          Name: "Thor",
          Occupation: "God of Thunder",
          Description: "SuperHero, God, King"
        }
      ],
	const [dataList, setDataList] = useState(lists)

	return (
		<div>
			
		</div>
	)
}

export default ToDoList
