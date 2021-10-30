# Why Coding Interviews Matter
*"Coding Interviews Suck! They don't have anything real"* - This phrase has been seen, read and heard over and over again. This post is meant to help people reframe their views on technical interviewing.

This post won't cover domain-specific ( web, ios, android etc. ) interviews, system design or behavioral interviews.

## Why They Matter
*"Why can't we just talk about what I've done?!"*. Interviews are trying to find **smart people who can get things done**. Interviews must lead to hiring people who fit that description without hiring people who don't. There are a few key reasons why "coding interviews" are structured the way they are:

1. Modern development is dominated by IDEs and frameworks; with custom configurations per-project and per-developer. To get a "real" situation you'd need quite a bit of boilerplate and setup time. Candidates will have to grep all of the question's setup before even starting to solve a problem.

2. Interview processes have to be cheap to run, train for and give a consistent grading scale to candidates regardless of their background ( programming language etc. ).

3. There's only ~30 minutes of coding time in an interview. Any time wasted on boilerplate or pulling in frameworks is time someone isn't showing you their aptitude; some things such as "trivia" questions dont have a good correlation to future job performance as well.

This essentially removes most "real" programs and leaves fundamentals-based questions as the most effective use of the time. There's another important aspect: these fundamentals questions are what those tools are *built on*.

Being able to succeed in this format is an indicator you'll succeed regardless of what problems you're asked to work on.

## Topics Covered
There are many, many concepts in Software Engineering and Computer Science that these interview questions _could_ cover but the majority of questions will cover:

- **basic data structures**: arrays, strings, lists, sets and maps
- **advanced data structures**: graphs, heaps, trees, tries, multi-dimensional arrays
- **basic algorithms**: Search, Sort, Decision Tables
- **advanced algorithms**: Recursion, Dynamic Programming, Backtracking, Shortest Path, Permutations and Combinations
- **basic math**: powers of 2 and 10, bits and bytes
- **advanced math**: base64 encoding, storage and bandwidth size, logarithms
- **performance**: BigO for time and storage complexity

## Core Patterns
There are tons of variations of questions but most of them center around how well you know a core set of patterns. If you understand the fundamentals of those core patterns then you're going to be well-equipped to solve those variations by pattern matching.


### Data Structures
There are many, many different data structures that are used throughout technology solutions.

- **Arrays**
- **Lists**
- **Heaps**
- **Trees**
- **Graphs**

Practical applications: Social Graphs, BTrees in SQL, Tries and Inverted Indexes in Language-Based Search, Abstract Syntax Trees in Transpilers,

### Search
These problems will involve finding some value or calculated value in a data structure: arrays, graphs or trees. Some classic problems such as *shortest route from A to B* or *largest area of connected nodes in a graph*. Occasionally there will be questions based around binary search to find a value in a sorted list. There are a few core algorithms in these problem sets:

- **Breadth-First Search** when you need to traverse a tree/graph *level by level*. Using a **Queue**, you can `while` loop until it is empty or some criteria has been met. More advanced algorithms here are ones like: Djikstra, A*.
- **Depth-First Search** when you need to traverse a tree/graph *parent to child*. Using recursion or a **Stack** that you can `while` loop until it is empty or some criteria has been met.
- **Binary Search** when you need to find a value in a sorted list by dividing the list in half and deciding to continue processing either the left half or right half.


### Sort
These problems will involve taking unordered data structures and sorting them to determine something else. Others will require knowledge of how to sort alphabets. There are a few core algorithms in these problem sets:

- **Alien Dictionary** usually involves either taking an existing alphabet and deciding if a list of words is sorted in that alphabet or if words occur that aren't in that alphabet OR given a list of words generate the alphabet that they're based on.
- **In-Place Sorting** when you need to keep the amount of memory used low, being able to in-place sort a list by swapping memory references
- **Topological Sort** involves taking a graph/tree and sorting the values in the graph inside-out or outside-in


### Decision Tables
Whenever a problem requires comparing two values - usually strings - to each other and trying to determine some common attribute between them, you can use Decision Tables to do that. This usually involves creating a 2D array where the values in one string are the "row" values to compare against, and the values in the 2nd string are the "column" values. Some common problems here are:

- **Edit Distance** to determine the smallest number of changes needed to convert one string into another. More advanced algorithms here are ones like: Levenshtein, Ukonnen.
- **Pattern Matching** to compare a string(s) against a regex-like pattern
- **Common Substrings** to compare two string(s) to each other to

Practical Applications: text-based word suggestions, DNA overlapping, HTTP path routing


### Sets and Subsets
These types of problems involve taking a data structure - usually a list of values - and generating a new list(s) of values or iterating over subsets of that initial list. Some common problems here are:

- **Sliding Window** when you need to go over contiguous subsets of a list or narrow/widen the left and right of a window to create some sub-list.
- **Permutations** involve taking all *unique* values in a list and generating all possible combinations of those *unique* values i.e. `{1,2} -> [{1,2}]`
- **Combinations** involve generating all possible combinations regardless of what order they are in i.e. `{1,2} -> [{1,2}, {2,1}]`


### Graph Theory
These sets of problems involve traversing a graph to determine some piece of information.

- **Accounts Merge** this usually involves taking lists of accounts - based on email, phone etc. - and building "nodes" based on those unique contact points and "edges" between them by some common trait like a user's name.

Practical applications: Social Networks, BTrees in SQL, Tries and Inverted Indexes in Language-based Search, Abstract Syntax Trees in Transpilers

### Performance
It's important to understand the runtime and storage performance of solutions. Why? Imagine that processing one entry in a list takes 1 millisecond. The performance of various algorithms would then be:

| **Performance** | **1 Entry (ms)** | **100k entries (ms)** | **100k entries (min)** |
| ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~~~ |
| O (log n) | 1ms | 17ms | 0.0003 min
| O (n) | 1ms | 100k ms | 1.7 min |
| O (n log n) | 1ms | 1.7m ms | 28 min |
|O (n^2) | 1ms | 10b ms | 166,667 min |

You can see that 1ms *seems* fast but when you have imperformant code and need to go over a large number of entries in a list, even an "okay" algorithm is going to take 30 minutes of compute time. Paying that cost over and over again would be very costly.


## Useful Links

- [Cracking the Coding Interview](https://www.youtube.com/playlist?list=PLI1t_8YX-ApvFsH-DaFmAmdJboAnbg08P) youtube series produced by Hackerrank based on the popular book
- [leetcode](https://leetcode.com/) for practicing many problems at once
- [Daily Coding Problem](https://www.dailycodingproblem.com/) an email per day with a coding problem
- [interviewing.io](https://interviewing.io/recordings) a site with live recordings of real interviews given by engineers at Facebook, Google, Slack, Airbnb, etc.
- [BigO Cheatsheet](https://www.bigocheatsheet.com/) to help visualize and remember the runtime performance categories and for various data structures and algorithms.
