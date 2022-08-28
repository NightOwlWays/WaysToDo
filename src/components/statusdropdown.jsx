import React, { useState } from "react"
import { Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

const data = [
    { label: 'Done', value: 'Done' },
    { label: 'Undone', value: 'Undone' }
]

export default function statusDropdown() {
    const [value, setValue] = useState(null)
    const [isFocus, setIsFocus] = useState(false)

    const render = () => {
        if (value || isFocus) {}
        return null
    }

    return (
        <View>
            {render()}
            <Dropdown
                className="w-80 h-10 mb-7 px-3 bg-slate-200 rounded-md border-2 border-slate-700"
                data={data}
                labelField="label"
                maxHeight={200}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value)
                    setIsFocus(false)
                }}
                onFocus={() => setIsFocus(true)}
                placeholder={!isFocus ? 'Status' : '...'}
                search
                searchPlaceholder="Search..."
                value={value}
                valueField="value"
            />
        </View>
    )
}