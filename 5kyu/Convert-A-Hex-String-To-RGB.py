def hex_string_to_RGB(hex_string): 
    hex = [int(hex_string[i:i+2], 16) for i in range(1, len(hex_string), 2)]
    return {'r': hex[0], 'g': hex[1], 'b': hex[2]}