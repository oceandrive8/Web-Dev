def alarm_clock(day, vacation):
    if vacation:
        if day == 0 or day == 6:
            return 'off'
        return '10:00'
    if day == 0 or day == 6:
        return '10:00'
    return '7:00'

print(alarm_clock(0, False))


"""
If not on vacation, the alarm rings at "7:00" on weekdays and "10:00" on weekends. 
If on vacation, the alarm rings at "10:00" on weekdays and "off" on weekends."""