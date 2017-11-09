function getSleepHours(day) {
  if (day = 'monday') {
    return actual_monday
  }
  else if (day = 'tuesday') {
    return actual_tuesday
  }
  else if (day = 'wednesday') {
    return actual_wednesday
  }
  else if (day = 'thursday') {
    return actual_thursday
  }
  else if (day = 'friday') {
    return actual_friday
  }
  else if (day = 'saturday') {
    return actual_saturday
  }
  else if (day = 'sunday') {
    return actual_sunday
  }
  t
}

var getActualSleepHours = () => {
  return getSleepHours(monday) + getSleepHours(tuesday) + getSleepHours(wednesday) + getSleepHours(thursday) + getSleepHours(friday) + getSleepHours(saturday) + getSleepHours(sunday)
}

function getIdealSleepHours() {
  var idealHours = 8
  return idealHours * 7
}

function calculateSleepDebt() {
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours()
}
