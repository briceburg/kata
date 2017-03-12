#!/usr/bin/env python

# # ex: args/python.py aaa bbb "ccc dddd"

import sys

argv=[]

print(sys.argv)

for arg in sys.argv[1:]:
    # sys.argv[0] = file being executed
    argv.append(arg)

for arg in argv:
    print(arg)
