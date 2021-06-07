import re
def to_camel_case(text):
    msg = re.split('[^A-Za-z0-9]', text)
    return ''.join([msg[0]] + [word.capitalize() for word in msg[1:]])