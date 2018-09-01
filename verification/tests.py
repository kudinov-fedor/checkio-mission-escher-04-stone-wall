"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": '''
##########
####0##0##
00##0###00
''',
            "answer": 4
        },
        {
            "input": '''
##########
####0##0##
00##0###00
00########
''',
            "answer": 0
        }
    ],
    "Extra": [
        {
            "input": '''
#00#######
#######0##
00######00
''',
            "answer": 1
        },
        {
            "input": '''
00##00####
##########
########00
########00
''',
            "answer": 8
        },
        {
            "input": '''
#####
#####
#####
''',
            "answer": 0
        },
        {
            "input": '''
##0
###
###
###
''',
            "answer": 2
        },
        {
            "input": '''
####00####
##########
##0#####00
##0#####00
''',
            "answer": 2
        },
        {
            "input": '''
###
###
###
''',
            "answer": 0
        },
        {
            "input": '''
000#######
0######0##
00######00
''',
            "answer": 0
        },
        {
            "input": '''
00##00####
#0########
#0######00
########00
''',
            "answer": 1
        },
        {
            "input": '''
#####
##000
#####
''',
            "answer": 2
        }

    ]
}
