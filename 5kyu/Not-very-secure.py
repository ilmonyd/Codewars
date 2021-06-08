import re
def alphanumeric(string):
    return bool(re.match(r'^[A-Za-z0-9]+$', string))