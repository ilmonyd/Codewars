import os
def get_common_directory_path(pathes):
    res = os.path.dirname(os.path.commonprefix(pathes))
    return res + '/' if len(res) > 0 and res != '/' else res