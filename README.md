# momentnp

`momentnp` is a node module that provides various utilities for handling dates, including formatting dates, calculating the time difference from the current time, and converting dates to Nepali formats.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [fromNow](#fromnow)
  - [format](#format)
  - [inBS](#inbs)
  - [isPast](#ispast)
- [Examples](#examples)

## Installation

Simply paste the following code into the terminal to install `momentnp`:

```bash
npm install momentnp
```

or

```bash
yarn add momentnp
```

## Usage

To use `momentnp`, create an instance of the function with a date string or a Date object. If no valid date is provided, it will use the current date.

```javascript
const myDate = momentnp("2023-06-01");
```

### fromNow

The `fromNow` method calculates the difference from the provided date to the current date and returns the difference in Nepali format.

```javascript
myDate.fromNow(); // Returns the difference in Nepali, e.g., 'केहि क्षण पहिले'
```

### format

The `format` method formats the date into different specified formats. Available formats are:

- `dmy-`: YYYY-MM-DD
- `dmyt-`: YYYY-MM-DD HH:MM:SS
- `dmy/`: YYYY/MM/DD
- `dmyt/`: YYYY/MM/DD HH:MM:SS
- `DDMMYY`: Dth Month, YYYY
- `DDDDMMYY`: Day, Dth Month YYYY
- `ddDDMMYY`: Day, Dth Mon YYYY
- `DDDDMMYYnp`: Nepali format with full day and month names
- `DDMMYYnp`: Nepali format with month name
- `YYMMDDDDnp`: Nepali format with year, month, and day names
- `dmytnp-`: Nepali format with dash separator
- `dmynp-`: Nepali format with dash separator, date only
- `dmynp/`: Nepali format with slash separator, date only
- `dmytnp/`: Nepali format with slash separator
- `fullnp`: Full Nepali date with time

```javascript
myDate.format("dmy-"); // Returns '2023-06-01'
myDate.format("fullnp"); // Returns full Nepali date with time
```

### inBS

The `inBS` method converts the date to the Bikram Sambat (BS) calendar and returns it in the specified format. Available formats are:

- `YYMMDD`: BS date in YYYY-MM-DD
- `ddmmyy`: BS date in Nepali format with month name
- `ddmmyyfull`: BS date in full Nepali format
- `mmddyy`: BS date with month name
- `yymmdd`: BS date in YYYY/MM/DD

```javascript
myDate.inBS("YYMMDD"); // Returns BS date in YYYY-MM-DD format
myDate.inBS("ddmmyyfull"); // Returns full Nepali formatted BS date
```

### isPast

The `isPast` method checks if the provided date is in the past.

```javascript
myDate.isPast(); // Returns true if the date is in the past, otherwise false
```

## Examples

```javascript
const dateExample = momentnp("2023-05-21");

console.log(dateExample.fromNow()); // Outputs time difference in Nepali
console.log(dateExample.format("dmy-")); // Outputs '2023-05-21'
console.log(dateExample.format("fullnp")); // Outputs full Nepali formatted date and time
console.log(dateExample.inBS("YYMMDD")); // Outputs BS date in YYYY-MM-DD format
console.log(dateExample.isPast()); // Outputs true or false based on whether the date is in the past
```

By utilizing `momentnp`, you can easily handle date manipulations and formatting in both English and Nepali contexts.
