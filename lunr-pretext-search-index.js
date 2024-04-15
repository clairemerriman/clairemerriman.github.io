var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-intro",
  "level": "1",
  "url": "sec-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Wednesday, January 17: Introduction and Divisibility",
  "body": " Wednesday, January 17: Introduction and Divisibility   Understand the course structure  Formally define even and odd  Formally define ``divides\"  Complete basic algebraic proofs    Introduction  What is number theory?  Elementary number theory is the study of integers, especially the positive integers. A lot of the course focuses on prime numbers, which are the multiplicative building blocks of the integers. Another big topic in number theory is integer solutions to equations such as the Pythagorean triples or the generalization . Proving that there are no integer solutions when was an open problem for close to 400 years  The first part of this course reproves facts about divisibility and prime numbers that you are probably familiar with. There are two purposes to this: 1) formalizing definitions and 2) starting with the situation you understand before moving to the new material.  Go over syllabus highlights: Deadlines, make-up policy, in-class work, reading assignments.   Mathematical definitions, mathematical notation  Number Systems    Integers,     Natural numbers,     Real numbers     We will use the following number systems and abbreviations:  The integers, written , is the set .  The positive integers are , while the nonnegative integers are .  The natural numbers, written . Most elementary number theory texts either define to be the positive integers or avoid using . Some mathematicians include in , especially logicians.  The real numbers, written .  The integers modulo , written . We will define this set in Strayer Chapter 2, although Strayer does not use this notation.    We will also use the following notation:  The symbol means ``element of\" or ``in.\" For example, means `` is an element of the integers\" or `` in the integers.\"      This first section will cover results in both Strayer and Ernst.  Ernst, Definition 2.1   An integer is even if for some . An integer is odd if for some .    Now, the preceding definition is standard in an introduction to proofs course, but it is not the only definition of even\/odd. We also have the following definition that is closer to the definition you are probably used to:  Strayer, Definition 4   Let . Then is said to be even if divides and is said to be odd if does not divide .    Note that we need to define divides in order to use Strayer's definition. We will formally prove that these definitions are equivalent, but for now, let's use Ernst definition.  Ernst, Theorem 2.2   If is an even integer, then is even.      Prove this theorem.    If is an even integer, then by the definition from Ernst , there is some such that . Then Since is an integer, we have written in the desired form. Thus, is even.    Ernst, Theorem 2.3   The sum of two consecutive integers in odd.    For this problem, we need to figure out how to write two consecutive integers.   Let be two consecutive integers. Then their sum is which is odd by the definition from Ernst .    Divisibility  The goal of this chapter is to review basic facts about divisibility, get comfortable with the new notation, and solve some basic linear equations.  We will also use this material as an opportunity to get used to the course.  Ask : what is a definition for ``a divides b''?  divides    divides     does not divide    Let . Then divides , denoted , if there exists an integer such that . If , then is said to be a divisor or factor of . The notation means does not divide .    Note that 0 is not a divisor of any integer other than itself, since implies . Also all integers are divisors of 0, as odd as that sounds at first. This is because for any , .  Reminding students about the reading for Friday.   "
},
{
  "id": "sec-intro-2",
  "level": "2",
  "url": "sec-intro.html#sec-intro-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": " Understand the course structure  Formally define even and odd  Formally define ``divides\"  Complete basic algebraic proofs   "
},
{
  "id": "def-number-systems",
  "level": "2",
  "url": "sec-intro.html#def-number-systems",
  "type": "Definition",
  "number": "1",
  "title": "Number Systems.",
  "body": "Number Systems    Integers,     Natural numbers,     Real numbers     We will use the following number systems and abbreviations:  The integers, written , is the set .  The positive integers are , while the nonnegative integers are .  The natural numbers, written . Most elementary number theory texts either define to be the positive integers or avoid using . Some mathematicians include in , especially logicians.  The real numbers, written .  The integers modulo , written . We will define this set in Strayer Chapter 2, although Strayer does not use this notation.    We will also use the following notation:  The symbol means ``element of\" or ``in.\" For example, means `` is an element of the integers\" or `` in the integers.\"     "
},
{
  "id": "def-even-odd-form",
  "level": "2",
  "url": "sec-intro.html#def-even-odd-form",
  "type": "Definition",
  "number": "2",
  "title": "Ernst, Definition 2.1.",
  "body": "Ernst, Definition 2.1   An integer is even if for some . An integer is odd if for some .   "
},
{
  "id": "def-even-odd-divides",
  "level": "2",
  "url": "sec-intro.html#def-even-odd-divides",
  "type": "Definition",
  "number": "3",
  "title": "Strayer, Definition 4.",
  "body": "Strayer, Definition 4   Let . Then is said to be even if divides and is said to be odd if does not divide .   "
},
{
  "id": "sec-intro-4-7",
  "level": "2",
  "url": "sec-intro.html#sec-intro-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divides equivalent, "
},
{
  "id": "thm-even-sq",
  "level": "2",
  "url": "sec-intro.html#thm-even-sq",
  "type": "Theorem",
  "number": "4",
  "title": "Ernst, Theorem 2.2.",
  "body": "Ernst, Theorem 2.2   If is an even integer, then is even.   "
},
{
  "id": "sec-intro-4-9",
  "level": "2",
  "url": "sec-intro.html#sec-intro-4-9",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Prove this theorem.    If is an even integer, then by the definition from Ernst , there is some such that . Then Since is an integer, we have written in the desired form. Thus, is even.   "
},
{
  "id": "thm-sum-odd",
  "level": "2",
  "url": "sec-intro.html#thm-sum-odd",
  "type": "Theorem",
  "number": "6",
  "title": "Ernst, Theorem 2.3.",
  "body": "Ernst, Theorem 2.3   The sum of two consecutive integers in odd.   "
},
{
  "id": "sec-intro-4-12",
  "level": "2",
  "url": "sec-intro.html#sec-intro-4-12",
  "type": "Proof",
  "number": "1.1.2.1",
  "title": "",
  "body": " Let be two consecutive integers. Then their sum is which is odd by the definition from Ernst .  "
},
{
  "id": "def-divides",
  "level": "2",
  "url": "sec-intro.html#def-divides",
  "type": "Definition",
  "number": "7",
  "title": "<span class=\"process-math\">\\(a\\)<\/span> divides <span class=\"process-math\">\\(b\\)<\/span>.",
  "body": "divides    divides     does not divide    Let . Then divides , denoted , if there exists an integer such that . If , then is said to be a divisor or factor of . The notation means does not divide .   "
},
{
  "id": "sec-truthTable",
  "level": "1",
  "url": "sec-truthTable.html",
  "type": "Section",
  "number": "1.2",
  "title": "Friday, January 19: Logic, proof by contradiction, and biconditionals",
  "body": " Friday, January 19: Logic, proof by contradiction, and biconditionals    Prove facts about divisibility  Prove basic mathematical statements using definitions and direct proof  Use truth tables to understand compound propositions  Prove statements by contradiction  Use the greatest integer function       Read Ernst Chapter 1 and Section 2.1 . Also read Strayer Introduction and Section 1.1 through the proof of Proposition 1.2 (that is, pages 1-5).    Ernst Problem 2.6  For how are the following mathematical expressions similar and how are they different? In particular, is each one a sentence or simply a noun?              The first means `` divides ,\" which is a relationship between and . This is a sentence. The other two are nouns, that is, the rational number .   Ernst Problem 2.8  Let . Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.  If , then   Let . Then by definition , there exists such that . Multiplying both sides of the equation by gives so by definition .    If divides then divides and divides .  Let . Then by definition , there exists such that . By factoring , we see that so and .    If divides then divides and divides .  Let . Then by definition , there exists such that . Thus, we see that so and .       Ernst Problem 2.12  Determine whether the converse of each of Corollary 2.9, Theorem 2.10, and Theorem 2.11 is true. That is, for , determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.  If divides , then divides . (Converse of Corollary 2.9)  False; but .    If divides , then divides . (Converse of Theorem 2.10)  True. If , then by definition , there exists such that . Multiplying both sides by gives Therefore, .    If divides , then divides and divides . (Converse of Theorem 2.11)  False; but and .         Reminders and Homework Guide Review  Updated In Class Work logistics: if I am able to give individual feedback during class or have pairs\/groups present the answers during class, then I will not collect the work.   Logic, proof by contradiction, and biconditionals    We will begin by working through Ernst Section 2.2 through Example 2.21. Discuss Problem 2.17 as a class, and note that Problem 2.19 is on Homework 1.   Ernst Problem 2.17  Determine whether each of the following is a proposition. Explain your reasoning.  All cars are red.  Every person whose name begins with J has the name Joe.  . There exists a real number such that .  For all real numbers , .  is an irrational number.  is prime.  Is it raining?  It will rain tomorrow.  Led Zeppelin is the best band of all time.     Ernst Problem 2.19  Let represent 6 is an even integer and represent 4 divides 6. Express each of the following compound propositions in an ordinary English sentence and then determine its truth value.             Construct a truth table for and .                  T  T  T  F  F    T  F  F  T  T    F  T  T  F  F    F  F  T  F  F       This is the basis for proof by contradiction . We assume both and ., and proceed until we get a contradiction. That is, and cannot both be true.   Proof by contradiction . Let and be propositions. To prove implies by contradiction, first assume the is false. Then work through logical steps until you conclude .   First, let's define a lemma . A lemma is a minor result whose sole purpose is to help in proving a theorem, although some famous named lemmas have become important results in their own right.  , Greatest integer (floor) function    greatest integer (or floor) function    Let . The greatest integer function of ., denoted or ., is the greatest integer less than or equal to .    Strayer, Lemma 1.3  Let . Then .    By the definition of the greatest integer function , .  To prove that we proceed by contradiction. Assume that (the negation of ). Then, . This contradicts the assumption that is the greatest integer less than or equal to  . Thus, .      "
},
{
  "id": "sec-truthTable-2",
  "level": "2",
  "url": "sec-truthTable.html#sec-truthTable-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Prove facts about divisibility  Prove basic mathematical statements using definitions and direct proof  Use truth tables to understand compound propositions  Prove statements by contradiction  Use the greatest integer function   "
},
{
  "id": "rqs-logic-1",
  "level": "2",
  "url": "sec-truthTable.html#rqs-logic-1",
  "type": "Reading Question",
  "number": "1.2.11.2.1.1",
  "title": "Ernst Problem 2.6.",
  "body": "Ernst Problem 2.6  For how are the following mathematical expressions similar and how are they different? In particular, is each one a sentence or simply a noun?              The first means `` divides ,\" which is a relationship between and . This is a sentence. The other two are nouns, that is, the rational number .  "
},
{
  "id": "rqs-logic-2",
  "level": "2",
  "url": "sec-truthTable.html#rqs-logic-2",
  "type": "Reading Question",
  "number": "1.2.11.2.1.2",
  "title": "Ernst Problem 2.8.",
  "body": "Ernst Problem 2.8  Let . Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.  If , then   Let . Then by definition , there exists such that . Multiplying both sides of the equation by gives so by definition .    If divides then divides and divides .  Let . Then by definition , there exists such that . By factoring , we see that so and .    If divides then divides and divides .  Let . Then by definition , there exists such that . Thus, we see that so and .      "
},
{
  "id": "rqs-logic-3",
  "level": "2",
  "url": "sec-truthTable.html#rqs-logic-3",
  "type": "Reading Question",
  "number": "1.2.11.2.1.3",
  "title": "Ernst Problem 2.12.",
  "body": "Ernst Problem 2.12  Determine whether the converse of each of Corollary 2.9, Theorem 2.10, and Theorem 2.11 is true. That is, for , determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.  If divides , then divides . (Converse of Corollary 2.9)  False; but .    If divides , then divides . (Converse of Theorem 2.10)  True. If , then by definition , there exists such that . Multiplying both sides by gives Therefore, .    If divides , then divides and divides . (Converse of Theorem 2.11)  False; but and .      "
},
{
  "id": "sec-truthTable-5-2",
  "level": "2",
  "url": "sec-truthTable.html#sec-truthTable-5-2",
  "type": "In Class Activity",
  "number": "1",
  "title": "",
  "body": "  We will begin by working through Ernst Section 2.2 through Example 2.21. Discuss Problem 2.17 as a class, and note that Problem 2.19 is on Homework 1.   Ernst Problem 2.17  Determine whether each of the following is a proposition. Explain your reasoning.  All cars are red.  Every person whose name begins with J has the name Joe.  . There exists a real number such that .  For all real numbers , .  is an irrational number.  is prime.  Is it raining?  It will rain tomorrow.  Led Zeppelin is the best band of all time.     Ernst Problem 2.19  Let represent 6 is an even integer and represent 4 divides 6. Express each of the following compound propositions in an ordinary English sentence and then determine its truth value.             Construct a truth table for and .                  T  T  T  F  F    T  F  F  T  T    F  T  T  F  F    F  F  T  F  F      "
},
{
  "id": "sec-truthTable-5-3",
  "level": "2",
  "url": "sec-truthTable.html#sec-truthTable-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contradiction "
},
{
  "id": "proof-contradiction",
  "level": "2",
  "url": "sec-truthTable.html#proof-contradiction",
  "type": "Definition",
  "number": "9",
  "title": "",
  "body": " Proof by contradiction . Let and be propositions. To prove implies by contradiction, first assume the is false. Then work through logical steps until you conclude .  "
},
{
  "id": "sec-truthTable-5-5",
  "level": "2",
  "url": "sec-truthTable.html#sec-truthTable-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lemma "
},
{
  "id": "def-floor",
  "level": "2",
  "url": "sec-truthTable.html#def-floor",
  "type": "Definition",
  "number": "10",
  "title": "Greatest integer (floor) function.",
  "body": ", Greatest integer (floor) function    greatest integer (or floor) function    Let . The greatest integer function of ., denoted or ., is the greatest integer less than or equal to .   "
},
{
  "id": "lem-floor",
  "level": "2",
  "url": "sec-truthTable.html#lem-floor",
  "type": "Lemma",
  "number": "11",
  "title": "Strayer, Lemma 1.3.",
  "body": "Strayer, Lemma 1.3  Let . Then .  "
},
{
  "id": "sec-truthTable-5-8",
  "level": "2",
  "url": "sec-truthTable.html#sec-truthTable-5-8",
  "type": "Proof",
  "number": "1.2.3.1",
  "title": "",
  "body": " By the definition of the greatest integer function , .  To prove that we proceed by contradiction. Assume that (the negation of ). Then, . This contradicts the assumption that is the greatest integer less than or equal to  . Thus, .  "
},
{
  "id": "sec-DivisionAlg",
  "level": "1",
  "url": "sec-DivisionAlg.html",
  "type": "Section",
  "number": "2.1",
  "title": "Monday, January 22: Division algorithm and quantifiers",
  "body": " Monday, January 22: Division algorithm and quantifiers    Understand universal and existential quantifiers  Negate statements using quantifiers  Negate conditional statements using quantifiers  Prove existence and uniqueness for the Division Algorithm      Read Ernst Section 2.2 and Section 2.4     Ernst, Problem 2.59  Both of the following sentences are propositions. Decide whether each is true or false. What would it take to justify your answers?  For all  . False--find a counterexample.   There exists such that . True--find a solution .      Ernst Problem 2.64  Suppose the universe of discourse is the set of real numbers and consider the predicate . Interpret the meaning of each of the following statements.  There exists such that there exists such that . There exists such that for some     There exists such that there exists such that . There exists such that for some     For all , for all , . For all real numbers and           Go over reading assignment at the start of class.   Division Algorithm  Section 1.1 introduces the division algorithm, which will come up repeatedly throughout the semester, as well as the definition of divisors from last class.  Division Algorithm  Strayer Theorem 1.4  Let with . Then there exists a unique such that   Before proving this theorem, let's think about division with remainders, ie long division. The quotient should be the largest integer such that . If we divide both sides by , we have . We have a function to find the greatest integer less than or equal to namely . If we rearrange the equation we gave . This is our scratch work for existence.  Proof of  Let with . Define and . Then by rearranging the equation. Now we need to show .  Since by , we have Multiplying all terms by , we get Adding to every term gives By the definition of , we have shown .  Finally, we need to show that and are unique. Assume there exist with  We need to show and . We can subtract the two equations from each other.   Rearranging, we get . Thus, . From rearranging the inequalities: Thus, the only way is that and thus . Now, becomes . Since we assumed , we have that .      Use the on and .    For , we have that .  For , we have that .      Let and be nonzero integers. Prove that there exists a unique such that     Proof Method 1   Use the to prove this statement as a corollary. That is, use the conclusion of the Division Algorithm as part of the proof. Use the following outline (Outline updated from class).   Let and be nonzero integers. Since , the says that there exist unique such that  and .   There are two cases:  When the conditions are already met and and  Otherwise, , and .    Since both cases used that the are unique, then are also unique.     Proof Method 2   Use the proof of the Division Algorithm as a template to prove this statement. That is, repeat the steps, adjusting as necessary, but do not use the conclusion.   In the proof of the Division Algorithm, we let . Here we have two cases:  When   and .   When  and .    Follow the steps of the proof of the Division Algorithm to finish the proof.       "
},
{
  "id": "sec-DivisionAlg-2",
  "level": "2",
  "url": "sec-DivisionAlg.html#sec-DivisionAlg-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  Understand universal and existential quantifiers  Negate statements using quantifiers  Negate conditional statements using quantifiers  Prove existence and uniqueness for the Division Algorithm   "
},
{
  "id": "exercises-read-jan19-1",
  "level": "2",
  "url": "sec-DivisionAlg.html#exercises-read-jan19-1",
  "type": "Reading Question",
  "number": "2.1.12.1.1.1",
  "title": "Ernst, Problem 2.59.",
  "body": "Ernst, Problem 2.59  Both of the following sentences are propositions. Decide whether each is true or false. What would it take to justify your answers?  For all  . False--find a counterexample.   There exists such that . True--find a solution .     "
},
{
  "id": "exercises-read-jan19-2",
  "level": "2",
  "url": "sec-DivisionAlg.html#exercises-read-jan19-2",
  "type": "Reading Question",
  "number": "2.1.12.1.1.2",
  "title": "Ernst Problem 2.64.",
  "body": "Ernst Problem 2.64  Suppose the universe of discourse is the set of real numbers and consider the predicate . Interpret the meaning of each of the following statements.  There exists such that there exists such that . There exists such that for some     There exists such that there exists such that . There exists such that for some     For all , for all , . For all real numbers and       "
},
{
  "id": "div-alg",
  "level": "2",
  "url": "sec-DivisionAlg.html#div-alg",
  "type": "Theorem",
  "number": "12",
  "title": "Division Algorithm.",
  "body": "Division Algorithm  Strayer Theorem 1.4  Let with . Then there exists a unique such that  "
},
{
  "id": "proof-div-alg",
  "level": "2",
  "url": "sec-DivisionAlg.html#proof-div-alg",
  "type": "Proof",
  "number": "2.1.2.1",
  "title": "Proof of Division Algorithm.",
  "body": "Proof of  Let with . Define and . Then by rearranging the equation. Now we need to show .  Since by , we have Multiplying all terms by , we get Adding to every term gives By the definition of , we have shown .  Finally, we need to show that and are unique. Assume there exist with  We need to show and . We can subtract the two equations from each other.   Rearranging, we get . Thus, . From rearranging the inequalities: Thus, the only way is that and thus . Now, becomes . Since we assumed , we have that .  "
},
{
  "id": "sec-DivisionAlg-5-6",
  "level": "2",
  "url": "sec-DivisionAlg.html#sec-DivisionAlg-5-6",
  "type": "In Class Activity",
  "number": "2",
  "title": "",
  "body": "   Use the on and .    For , we have that .  For , we have that .      Let and be nonzero integers. Prove that there exists a unique such that     Proof Method 1   Use the to prove this statement as a corollary. That is, use the conclusion of the Division Algorithm as part of the proof. Use the following outline (Outline updated from class).   Let and be nonzero integers. Since , the says that there exist unique such that  and .   There are two cases:  When the conditions are already met and and  Otherwise, , and .    Since both cases used that the are unique, then are also unique.     Proof Method 2   Use the proof of the Division Algorithm as a template to prove this statement. That is, repeat the steps, adjusting as necessary, but do not use the conclusion.   In the proof of the Division Algorithm, we let . Here we have two cases:  When   and .   When  and .    Follow the steps of the proof of the Division Algorithm to finish the proof.     "
},
{
  "id": "sec-primes",
  "level": "1",
  "url": "sec-primes.html",
  "type": "Section",
  "number": "2.2",
  "title": "Wedneday, January 24: Primes and Greatest Common Divisor",
  "body": " Wedneday, January 24: Primes and Greatest Common Divisor    Every integer greater than 1 has a prime divisor.  Prove that there are infinitely many prime numbers      Read Strayer, Section 1.2    Summarize proof  The proof method for Euclid's infinitude of primes is an important method. Summarize this method in your own words.   Summaries will vary   Identify any other new proof methods in this section  Proof by construction may be new to some students   Strayer Exercise 22  Prove that 2 is the only even prime number.   Assume that there exists another even prime number, call it . Then there exists by the definition of even , but that implies that by the definition of prime . Thus, is the only even prime number.     Primes  Prime, composite An integer is prime if the only positive divisors of are and itself. An integer which is not prime is composite .  Why is not prime?  Strayer Lemma 1.5   Every integer greater than 1 has a prime divisor.    We will not go over this proof in class.   Assume by contradiction that there exists greater than 1 with no prime divisor. By the well ordering principle, we may assume is the least such integer. By definition, , so is not prime. Thus, is composite and there exists such that and , . Since , then it has a prime divisor . But since and , . This contradicts our assumption, so no such integer exists.   Strayer Theorem 1.6, Euclid's Infinitude of Primes   There are infinitely many prime numbers.    Assume by way of contradiction, that there are only finitely many prime numbers, so . Consider the number . Now has a prime divisor, say, , by . So for some , . Then by linear combination ( ), which implies that , a contradiction. Hence, there are infinitely many prime numbers.    Another important fact is there are arbitrarily large sequences of composite numbers. Put another way, there are arbitrarily large gaps in the primes. Another important proof method, which is a constructive proof :  Proposition 1.8   For any positive integer , there are at least consecutive positive integers.    Given the positive integer , consider the consecutive positive integers   Let be a positive integer such that . Since and , we have by . So each of the consecutive positive integers is composite.         Strayer Exercise 29   Let be a positive integer with . Prove that if is prime, then can be written in the form with .    Assume that is a positive integer, and is prime. If is odd, then is odd, which would imply the only even prime. However, by assumption. Thus, is even.  By definition of even , there exists such that and . Thus, when     Strayer Exercise 23   Prove or disprove the following conjecture, which is similar to Conjecture 1:  Conjecture: There are infinitely many prime number for which and are also prime numbers.    On Homework 2.      Greatest common divisor  Greatest common divisor, relatively prime    greatest common divisor of and     greatest common divisor of and   If and then is a common divisor of and .  If at least one of and is not , the greatest (positive) number among their common divisors is called the greatest common divisor of and and is denoted or just .  If , we say that and are relatively prime .  If we want the greatest common divisor of several integers at once we denote that by or .   For example, is but is .   "
},
{
  "id": "sec-primes-2",
  "level": "2",
  "url": "sec-primes.html#sec-primes-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  Every integer greater than 1 has a prime divisor.  Prove that there are infinitely many prime numbers   "
},
{
  "id": "rqs-primes-1",
  "level": "2",
  "url": "sec-primes.html#rqs-primes-1",
  "type": "Reading Question",
  "number": "2.2.12.2.1.1",
  "title": "Summarize proof.",
  "body": "Summarize proof  The proof method for Euclid's infinitude of primes is an important method. Summarize this method in your own words.   Summaries will vary  "
},
{
  "id": "rqs-primes-2",
  "level": "2",
  "url": "sec-primes.html#rqs-primes-2",
  "type": "Reading Question",
  "number": "2.2.12.2.1.2",
  "title": "Identify any other new proof methods in this section.",
  "body": "Identify any other new proof methods in this section  Proof by construction may be new to some students  "
},
{
  "id": "rqs-primes-3",
  "level": "2",
  "url": "sec-primes.html#rqs-primes-3",
  "type": "Reading Question",
  "number": "2.2.12.2.1.3",
  "title": "Strayer Exercise 22.",
  "body": "Strayer Exercise 22  Prove that 2 is the only even prime number.   Assume that there exists another even prime number, call it . Then there exists by the definition of even , but that implies that by the definition of prime . Thus, is the only even prime number.  "
},
{
  "id": "def-prime",
  "level": "2",
  "url": "sec-primes.html#def-prime",
  "type": "Definition",
  "number": "17",
  "title": "Prime, composite.",
  "body": "Prime, composite An integer is prime if the only positive divisors of are and itself. An integer which is not prime is composite . "
},
{
  "id": "lem-prime-composite",
  "level": "2",
  "url": "sec-primes.html#lem-prime-composite",
  "type": "Lemma",
  "number": "18",
  "title": "Strayer Lemma 1.5.",
  "body": "Strayer Lemma 1.5   Every integer greater than 1 has a prime divisor.   "
},
{
  "id": "sec-primes-4-6",
  "level": "2",
  "url": "sec-primes.html#sec-primes-4-6",
  "type": "Proof",
  "number": "2.2.2.1",
  "title": "",
  "body": " Assume by contradiction that there exists greater than 1 with no prime divisor. By the well ordering principle, we may assume is the least such integer. By definition, , so is not prime. Thus, is composite and there exists such that and , . Since , then it has a prime divisor . But since and , . This contradicts our assumption, so no such integer exists.  "
},
{
  "id": "thm-inf-primes",
  "level": "2",
  "url": "sec-primes.html#thm-inf-primes",
  "type": "Theorem",
  "number": "19",
  "title": "Strayer Theorem 1.6, Euclid’s Infinitude of Primes.",
  "body": "Strayer Theorem 1.6, Euclid's Infinitude of Primes   There are infinitely many prime numbers.    Assume by way of contradiction, that there are only finitely many prime numbers, so . Consider the number . Now has a prime divisor, say, , by . So for some , . Then by linear combination ( ), which implies that , a contradiction. Hence, there are infinitely many prime numbers.   "
},
{
  "id": "prop-gaps-primes",
  "level": "2",
  "url": "sec-primes.html#prop-gaps-primes",
  "type": "Proposition",
  "number": "20",
  "title": "Proposition 1.8.",
  "body": "Proposition 1.8   For any positive integer , there are at least consecutive positive integers.    Given the positive integer , consider the consecutive positive integers   Let be a positive integer such that . Since and , we have by . So each of the consecutive positive integers is composite.   "
},
{
  "id": "sec-primes-4-10",
  "level": "2",
  "url": "sec-primes.html#sec-primes-4-10",
  "type": "In Class Activity",
  "number": "3",
  "title": "",
  "body": "     Strayer Exercise 29   Let be a positive integer with . Prove that if is prime, then can be written in the form with .    Assume that is a positive integer, and is prime. If is odd, then is odd, which would imply the only even prime. However, by assumption. Thus, is even.  By definition of even , there exists such that and . Thus, when     Strayer Exercise 23   Prove or disprove the following conjecture, which is similar to Conjecture 1:  Conjecture: There are infinitely many prime number for which and are also prime numbers.    On Homework 2.    "
},
{
  "id": "def-gcd",
  "level": "2",
  "url": "sec-primes.html#def-gcd",
  "type": "Definition",
  "number": "23",
  "title": "Greatest common divisor, relatively prime.",
  "body": "Greatest common divisor, relatively prime    greatest common divisor of and     greatest common divisor of and   If and then is a common divisor of and .  If at least one of and is not , the greatest (positive) number among their common divisors is called the greatest common divisor of and and is denoted or just .  If , we say that and are relatively prime .  If we want the greatest common divisor of several integers at once we denote that by or .  "
},
{
  "id": "sec-gcd",
  "level": "1",
  "url": "sec-gcd.html",
  "type": "Section",
  "number": "2.3",
  "title": "Friday, January 26: Quiz 1, Induction, Greatest Common Divisors",
  "body": " Friday, January 26: Quiz 1, Induction, Greatest Common Divisors    Understand induction  basic facts about the greatest common divisor      Read Strayer Appendix A.1: The First Principle of Mathematical Induction or Ernst Section 4.1 and Section 4.2     Strayer Exercise Set A, Exercise 1a  If is a positive integer, then    We proceed by induction. The base case is . Since we are done.  Now assume that if and  Adding to both sides gives, So the desired statement is true for . By the first principle of mathematical induction, the desired statement is true for all positive integers, and the proof is complete.     Quiz (10 minutes)  Greatest common divisor (25 min)  Common divisor, greatest common divisor  If and then is a common divisor of and .  If at least one of and is not , the greatest (positive) number among their common divisors is called the greatest common divisor of and and is denoted or just .  If , we say that and are relatively prime .  If we want the greatest common divisor of several integers at once we denote that by .   For example, is but is .  The GCD always exists when at least one of the integers is nonzero. How to show this: is always a divisor, and no divisor can be larger than the maximum of . So there is a finite number of divisors, thus there is a maximum.   Strayer Proposition 1.11   Let with and not both zero. Then     This proof brings together definitions (of gcd) , previous results ( , factors of ), the well-ordering principle, and some methods for minimum and maximum\/greatest.   Since are not both zero, at least one of is in . Therefore, the set is nonempty and has a minimal element by the well-ordering principle. Call this element , and for some .  First we will show that . By the , there exist unique such that with . Then, so is an integral linear combination of and . Since is the least positive such integer, and . Similarly, .  It remains to show that is the greatest common divisor of and . Let be any common divisor of and . Then , so .   Since we assume and are not both zero, we could also simplify the first sentence using without loss of generality . Since there is no difference between and , we can assume .    More induction    In Ernst Section 4.1   Prove Ernst Theorem 4.5   For all , 3 divides .    We proceed by induction. When  . Thus, the statement is true for  Now assume and the desired statement is true for . Then the induction hypothesis is By the definition of divisible , there exists such that In other words, . Multiplying both sides by gives . Rewriting this equation gives . Thus, , and the desired statement is true for . By the (first) principle of mathematical induction, the statement is true for all positive integers, and the proof is complete.    Ernst Theorem 4.7   Let be distinct points arranged on a circle. Then the number of line segments joining all pairs of points is .    We proceed by induction. When , there is only one point, so there are no lines connecting pairs of points. Additionally, . Alternately, you could use for the base case. Then there is one line connecting the only pair of points and .  Now assume and the desired statement is true for . Then the induction hypothesis is for distinct points arranged in a circle, the number of line segments joining all pairs of points is . Adding a point on the circle will add an additional line segments joining pairs of points, one for each existing point. Note that     Strayer Appendix A, Exercise 1  Use the first principle of mathematical induction to prove each statement.  (b) If is a positive integer, then   We proceed by induction. When  . Thus, the statement is true for   Now assume and the desired statement is true for . Then the induction hypothesis is Adding to both sides gives   Thus, the desired statement is true for . By the (first) principle of mathematical induction, the statement is true for all positive integers, and the proof is complete.    (c) If is an integer with then   We proceed by induction with base case . When . Thus, the statement is true for   Now assume and is true for . Multiplying both sides of the inequality by gives Notice that when , which is true for all . Thus . Thus, the desired statement is true for . By the (first) principle of mathematical induction, the statement is true for all positive integers, and the proof is complete.         "
},
{
  "id": "sec-gcd-2",
  "level": "2",
  "url": "sec-gcd.html#sec-gcd-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  Understand induction  basic facts about the greatest common divisor   "
},
{
  "id": "rqs-gcd-1",
  "level": "2",
  "url": "sec-gcd.html#rqs-gcd-1",
  "type": "Reading Question",
  "number": "2.3.12.3.1.1",
  "title": "Strayer Exercise Set A, Exercise 1a.",
  "body": "Strayer Exercise Set A, Exercise 1a  If is a positive integer, then    We proceed by induction. The base case is . Since we are done.  Now assume that if and  Adding to both sides gives, So the desired statement is true for . By the first principle of mathematical induction, the desired statement is true for all positive integers, and the proof is complete.  "
},
{
  "id": "sec-gcd-5-2",
  "level": "2",
  "url": "sec-gcd.html#sec-gcd-5-2",
  "type": "Definition",
  "number": "24",
  "title": "Common divisor, greatest common divisor.",
  "body": "Common divisor, greatest common divisor  If and then is a common divisor of and .  If at least one of and is not , the greatest (positive) number among their common divisors is called the greatest common divisor of and and is denoted or just .  If , we say that and are relatively prime .  If we want the greatest common divisor of several integers at once we denote that by .  "
},
{
  "id": "Bezout",
  "level": "2",
  "url": "sec-gcd.html#Bezout",
  "type": "Proposition",
  "number": "25",
  "title": "Strayer Proposition 1.11.",
  "body": "Strayer Proposition 1.11   Let with and not both zero. Then    "
},
{
  "id": "sec-gcd-5-7",
  "level": "2",
  "url": "sec-gcd.html#sec-gcd-5-7",
  "type": "Proof",
  "number": "2.3.3.1",
  "title": "",
  "body": " Since are not both zero, at least one of is in . Therefore, the set is nonempty and has a minimal element by the well-ordering principle. Call this element , and for some .  First we will show that . By the , there exist unique such that with . Then, so is an integral linear combination of and . Since is the least positive such integer, and . Similarly, .  It remains to show that is the greatest common divisor of and . Let be any common divisor of and . Then , so .  "
},
{
  "id": "sec-gcd-6-2",
  "level": "2",
  "url": "sec-gcd.html#sec-gcd-6-2",
  "type": "In Class Activity",
  "number": "4",
  "title": "",
  "body": "  In Ernst Section 4.1   Prove Ernst Theorem 4.5   For all , 3 divides .    We proceed by induction. When  . Thus, the statement is true for  Now assume and the desired statement is true for . Then the induction hypothesis is By the definition of divisible , there exists such that In other words, . Multiplying both sides by gives . Rewriting this equation gives . Thus, , and the desired statement is true for . By the (first) principle of mathematical induction, the statement is true for all positive integers, and the proof is complete.    Ernst Theorem 4.7   Let be distinct points arranged on a circle. Then the number of line segments joining all pairs of points is .    We proceed by induction. When , there is only one point, so there are no lines connecting pairs of points. Additionally, . Alternately, you could use for the base case. Then there is one line connecting the only pair of points and .  Now assume and the desired statement is true for . Then the induction hypothesis is for distinct points arranged in a circle, the number of line segments joining all pairs of points is . Adding a point on the circle will add an additional line segments joining pairs of points, one for each existing point. Note that     Strayer Appendix A, Exercise 1  Use the first principle of mathematical induction to prove each statement.  (b) If is a positive integer, then   We proceed by induction. When  . Thus, the statement is true for   Now assume and the desired statement is true for . Then the induction hypothesis is Adding to both sides gives   Thus, the desired statement is true for . By the (first) principle of mathematical induction, the statement is true for all positive integers, and the proof is complete.    (c) If is an integer with then   We proceed by induction with base case . When . Thus, the statement is true for   Now assume and is true for . Multiplying both sides of the inequality by gives Notice that when , which is true for all . Thus . Thus, the desired statement is true for . By the (first) principle of mathematical induction, the statement is true for all positive integers, and the proof is complete.       "
},
{
  "id": "sec-floor",
  "level": "1",
  "url": "sec-floor.html",
  "type": "Section",
  "number": "3.1",
  "title": "Monday, January 29: More algebraic proofs and the Euclidean Algorithm",
  "body": "Monday, January 29: More algebraic proofs and the Euclidean Algorithm    Understand turning scratch work into proof for algebraic proofs  Approach the floor function problems from Homework 1  Prove the Euclidean Algorithm halts and generates the greatest common divisor of two positive integersobj      None.    The Learn TeX assignment using a copy of the Homework Template    Example of proof like the floor function  I did not go over the entire example in class. This also took the place of in class problems.  Let's explicitly think about the floor function as a function. That is, (a function from the real numbers to the integers). Here is a restatement of the homework problem:    enumerate    For each of the following equations, find a domain for make the statement true. Prove your statement.  Here is a similar problem with proofs where . Note that the scratch work is one way to think about solving the problem but would not be included in the homework writeup.   For each of the following equations, find the full domain for that makes the statement true. Prove that the equation is always true on this domain.        We want to find a restriction such that . Using the double angle formula, we get This means we are actually looking for      If , then .    Let . Then and . Thus, .            We want to find a restriction such that . Using the angle addition formula, we get This means we are actually looking for      If or for some , then     Note that by the angle addition formula. We will consider two cases:  Case 1: Let for some . Then and   Case 2: Let for some . Then and   Thus, when or for some .      Let . For each of the following equations, find the full domain for that makes the statement true. Prove your statement.       First, .  For (a)   For (b)      For   if and only if ,  if and only if .         Let and . Then .  To prove that this is the only such , let . Then , which simplifies to .    Let . First we consider the case . Then   Next, we consider the case . Then   To prove that these are the only such , let . Then , which hasthe solutions .             The Euclidean Algorithm  Typically by Euclidean Algorithm , we mean both the algorithm and the theorem that the algorithm always generates the greatest common divisor of two (positive) integers.  Euclidean algorithm Strayer, Theorem 1.13   Let with . By the , there exist such that If , there exist such that If , there exist such that   Continuing this process, for some . If , then . If , then .    Note that by construction. If the sequence did not stop, then we would have an infinite, decreasing sequence of positive integers, which is not possible. Thus, for some .  When , and .  states that for , . This is because any common divisor of and is also a divisor of .  If , then by repeated application of the , we have Then . Thus .    When using the Euclidean algorithm, it can be tricky to keep track of what is happening. Doing a lot of examples can help.   "
},
{
  "id": "sec-floor-2",
  "level": "2",
  "url": "sec-floor.html#sec-floor-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  Understand turning scratch work into proof for algebraic proofs  Approach the floor function problems from Homework 1  Prove the Euclidean Algorithm halts and generates the greatest common divisor of two positive integersobj   "
},
{
  "id": "rqs-floor-1",
  "level": "2",
  "url": "sec-floor.html#rqs-floor-1",
  "type": "Reading Question",
  "number": "3.1.13.1.1.1",
  "title": "The Learn TeX assignment using a copy of the Homework Template.",
  "body": "The Learn TeX assignment using a copy of the Homework Template "
},
{
  "id": "sec-floor-4-4",
  "level": "2",
  "url": "sec-floor.html#sec-floor-4-4",
  "type": "Problem",
  "number": "29",
  "title": "",
  "body": "For each of the following equations, find a domain for make the statement true. Prove your statement. "
},
{
  "id": "sec-floor-4-6",
  "level": "2",
  "url": "sec-floor.html#sec-floor-4-6",
  "type": "Problem",
  "number": "30",
  "title": "",
  "body": " For each of the following equations, find the full domain for that makes the statement true. Prove that the equation is always true on this domain.        We want to find a restriction such that . Using the double angle formula, we get This means we are actually looking for      If , then .    Let . Then and . Thus, .            We want to find a restriction such that . Using the angle addition formula, we get This means we are actually looking for      If or for some , then     Note that by the angle addition formula. We will consider two cases:  Case 1: Let for some . Then and   Case 2: Let for some . Then and   Thus, when or for some .      Let . For each of the following equations, find the full domain for that makes the statement true. Prove your statement.       First, .  For (a)   For (b)      For   if and only if ,  if and only if .         Let and . Then .  To prove that this is the only such , let . Then , which simplifies to .    Let . First we consider the case . Then   Next, we consider the case . Then   To prove that these are the only such , let . Then , which hasthe solutions .           "
},
{
  "id": "euclid-alg",
  "level": "2",
  "url": "sec-floor.html#euclid-alg",
  "type": "Theorem",
  "number": "37",
  "title": "Euclidean algorithm.",
  "body": "Euclidean algorithm Strayer, Theorem 1.13   Let with . By the , there exist such that If , there exist such that If , there exist such that   Continuing this process, for some . If , then . If , then .    Note that by construction. If the sequence did not stop, then we would have an infinite, decreasing sequence of positive integers, which is not possible. Thus, for some .  When , and .  states that for , . This is because any common divisor of and is also a divisor of .  If , then by repeated application of the , we have Then . Thus .   "
},
{
  "id": "sec-FTA",
  "level": "1",
  "url": "sec-FTA.html",
  "type": "Section",
  "number": "3.2",
  "title": "Wednesday, January 31: Practice with the Euclidean Algorithm and the Fundamental Theorem of Arithmetic",
  "body": "Wednesday, January 31: Practice with the Euclidean Algorithm and the Fundamental Theorem of Arithmetic    Use the (extended) Euclidean Algorithm to write as a linear combination of and  Prove the Fundamental Theorem of Arithmetic  Prove is irrationalobj      Strayer, Section 1.5 through Proposition 1.17    Questions about the proof of the Fundamental Theorem of Arithmetic  Answer these questions about the proof of the Fundamental Theorem of Arithmetic (taken from ):  Can you write a brief outline (maybe 1\/10 as long as the theorem) giving the logic of the argument -- proof by contradiction, induction on n, etc.? (This is KEY.)  What mathematical raw materials are used in the proof? (Do we need a lemma? Do we need a new definition? A powerful theorem? and do you recall how to prove it? Is the full generality of that theorem needed, or just a weak version?)  What does the proof tell you about why the theorem holds?  Where is each of the hypotheses used in the proof?  Can you think of other questions to ask yourself?     Strayer states that the proof of Strayer states that the proof of is ``obvious from the Fundamental Theorem of Arithmetic and the definitions of and .\"\" Is this true? If so, why? If not, fill in the gaps.    Answers to both questions will vary between students.    Announcements  We have gotten a bit ahead of the reading. I adjusted the reading assignments--make sure to read Section 6.1 for Friday! This section does not use any facts beyond divisibility.   Practice with the Euclidean Algorithm (15 minutes)  Work in pairs to answer the following. Each pair will be assigned parts the following question.  Strayer Exercises 32 and 54 Find the greatest common divisors of the pairs of integers below and write the greatest common divisor as a linear combination of the integers.      enumerate     Fundamental Theorem of Arithmetic  Observations from reading assignment  Uses and   is used as the base case in the proof of  Prove factorization is unique by contradiction    Fundamental Theorem of Arithmetic Strayer, Theorem 1.16   Every integer greater than one can be written in the form where the are distinct prime numbers and the are positive integers. This factorization into primes is unique up to the ordering of the terms.    (Alternate proof for existence). We will show that every integer greater than has a prime factorization. First, note that all primes are already in the desired form. We will use induction to show that every composite integer can be factored into the product of primes. When , we can write , so has the desired form.  Assume that for all integers with , can be written in the form where the are distinct prime numbers and the are positive integers. If is prime, we are done, otherwise there exists with such that . By the induction hypothesis, there exist primes and positive integers such that and . Then     We will use an idea similar to the proof of the Fundamental Theorem of Arithmetic to proof the following:    is irrational  As class, put the steps of the proof in order, then fill in the missing information.    "
},
{
  "id": "sec-FTA-2",
  "level": "2",
  "url": "sec-FTA.html#sec-FTA-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  Use the (extended) Euclidean Algorithm to write as a linear combination of and  Prove the Fundamental Theorem of Arithmetic  Prove is irrationalobj   "
},
{
  "id": "rqs-FTA-1",
  "level": "2",
  "url": "sec-FTA.html#rqs-FTA-1",
  "type": "Reading Question",
  "number": "3.2.13.2.1.1",
  "title": "Questions about the proof of the Fundamental Theorem of Arithmetic.",
  "body": "Questions about the proof of the Fundamental Theorem of Arithmetic  Answer these questions about the proof of the Fundamental Theorem of Arithmetic (taken from ):  Can you write a brief outline (maybe 1\/10 as long as the theorem) giving the logic of the argument -- proof by contradiction, induction on n, etc.? (This is KEY.)  What mathematical raw materials are used in the proof? (Do we need a lemma? Do we need a new definition? A powerful theorem? and do you recall how to prove it? Is the full generality of that theorem needed, or just a weak version?)  What does the proof tell you about why the theorem holds?  Where is each of the hypotheses used in the proof?  Can you think of other questions to ask yourself?    "
},
{
  "id": "rqs-FTA-2",
  "level": "2",
  "url": "sec-FTA.html#rqs-FTA-2",
  "type": "Reading Question",
  "number": "3.2.13.2.1.2",
  "title": "Strayer states that the proof of Proposition 1.17.",
  "body": "Strayer states that the proof of Strayer states that the proof of is ``obvious from the Fundamental Theorem of Arithmetic and the definitions of and .\"\" Is this true? If so, why? If not, fill in the gaps. "
},
{
  "id": "FTA",
  "level": "2",
  "url": "sec-FTA.html#FTA",
  "type": "Theorem",
  "number": "38",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": "Fundamental Theorem of Arithmetic Strayer, Theorem 1.16   Every integer greater than one can be written in the form where the are distinct prime numbers and the are positive integers. This factorization into primes is unique up to the ordering of the terms.    (Alternate proof for existence). We will show that every integer greater than has a prime factorization. First, note that all primes are already in the desired form. We will use induction to show that every composite integer can be factored into the product of primes. When , we can write , so has the desired form.  Assume that for all integers with , can be written in the form where the are distinct prime numbers and the are positive integers. If is prime, we are done, otherwise there exists with such that . By the induction hypothesis, there exist primes and positive integers such that and . Then    "
},
{
  "id": "sec-FTA-6-5",
  "level": "2",
  "url": "sec-FTA.html#sec-FTA-6-5",
  "type": "In Class Activity",
  "number": "5",
  "title": "",
  "body": "  is irrational  As class, put the steps of the proof in order, then fill in the missing information.  "
},
{
  "id": "sec-gcd-general",
  "level": "1",
  "url": "sec-gcd-general.html",
  "type": "Section",
  "number": "3.3",
  "title": "Friday, February 2: Quiz 2, Greatest Common Divisors and Diophantine Equations",
  "body": "Friday, February 2: Quiz 2, Greatest Common Divisors and Diophantine Equations    Prove the formula for integer solutions to .  State when integer solution exist for .      Strayer, Section 6.1    Find all integral solutions to .  By inspection, From Theorem 6.2, all solutions have the form where    Using the extended Euclidean Algorithm Note: you should stop at the first step, since you already have the desired form.  Then multiplying through by gives Thus,by Theorem 6.2, the general solution is where      Quiz (10 minutes)   More greatest common divisor (40 min)    Let with . Then     Let with . Define and We will show that and . Since the greatest common divisor is positive, we can conclude that This is not true in general and a common mistake on the homework. In general .  Since we know and . By the lemma we are about to prove, . Thus, is a common divisor of and , so .  Since , and . Since we know and by the same lemma. Thus, is a common divides of and      Let not both zero. Then any common divisor of and divides the greatest common divisor.    Let not both zero. By , for some . Thus, by linear combination.      Let not both zero. Then any divisor of is a common divisor of and .    Let be a divisor of . Since and then and by transitivity.      Let with . Then     Let . The since by the definition of greatest common divisor of one integer , . The case is .  Assume that for all , Let  and We will show that and . Since both and are positive, this will prove that .  Note that and by definition . Since by the induction hypothesis, and by . Again, by the induction hypothesis, so and by . Repeat this process until we get , so and by . Thus by repeated applications of . By the generalized version of the on Homework 3,  To show that we note that by definition . Then by the generalized version of the on Homework 3. Since we have that by .     "
},
{
  "id": "sec-gcd-general-2",
  "level": "2",
  "url": "sec-gcd-general.html#sec-gcd-general-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  Prove the formula for integer solutions to .  State when integer solution exist for .   "
},
{
  "id": "rqs-diophantine-1",
  "level": "2",
  "url": "sec-gcd-general.html#rqs-diophantine-1",
  "type": "Reading Question",
  "number": "3.3.13.3.1.1",
  "title": "Find all integral solutions to <span class=\"process-math\">\\(18x+28y=10\\text{.}\\)<\/span>.",
  "body": "Find all integral solutions to .  By inspection, From Theorem 6.2, all solutions have the form where    Using the extended Euclidean Algorithm Note: you should stop at the first step, since you already have the desired form.  Then multiplying through by gives Thus,by Theorem 6.2, the general solution is where   "
},
{
  "id": "lem-gcd_3case",
  "level": "2",
  "url": "sec-gcd-general.html#lem-gcd_3case",
  "type": "Lemma",
  "number": "39",
  "title": "",
  "body": "  Let with . Then     Let with . Define and We will show that and . Since the greatest common divisor is positive, we can conclude that This is not true in general and a common mistake on the homework. In general .  Since we know and . By the lemma we are about to prove, . Thus, is a common divisor of and , so .  Since , and . Since we know and by the same lemma. Thus, is a common divides of and   "
},
{
  "id": "lem-gcd_mult",
  "level": "2",
  "url": "sec-gcd-general.html#lem-gcd_mult",
  "type": "Lemma",
  "number": "40",
  "title": "",
  "body": "  Let not both zero. Then any common divisor of and divides the greatest common divisor.    Let not both zero. By , for some . Thus, by linear combination.   "
},
{
  "id": "lem-gcd_trans",
  "level": "2",
  "url": "sec-gcd-general.html#lem-gcd_trans",
  "type": "Lemma",
  "number": "41",
  "title": "",
  "body": "  Let not both zero. Then any divisor of is a common divisor of and .    Let be a divisor of . Since and then and by transitivity.   "
},
{
  "id": "prop-general-gcd",
  "level": "2",
  "url": "sec-gcd-general.html#prop-general-gcd",
  "type": "Proposition",
  "number": "42",
  "title": "",
  "body": "  Let with . Then     Let . The since by the definition of greatest common divisor of one integer , . The case is .  Assume that for all , Let  and We will show that and . Since both and are positive, this will prove that .  Note that and by definition . Since by the induction hypothesis, and by . Again, by the induction hypothesis, so and by . Repeat this process until we get , so and by . Thus by repeated applications of . By the generalized version of the on Homework 3,  To show that we note that by definition . Then by the generalized version of the on Homework 3. Since we have that by .   "
},
{
  "id": "sec-3dioph",
  "level": "1",
  "url": "sec-3dioph.html",
  "type": "Section",
  "number": "4.1",
  "title": "Monday February 5: More facts about greatest common divisor and linear Diophantine equations",
  "body": " Monday February 5: More facts about greatest common divisor and linear Diophantine equations    Find the solutions to a specific Diophantine equation in three variables  Prove that when a Diophantine equation in three variables has a solutions, it has infinitely many.      Strayer Section 1.5    Finish proof of  The proof of ends with ``the cases and  and and are easily checked and are left as exercises. Do this.   When and then and . Then . Similarly for . When then and    Proof of  For , the book states ``The (extremely easy) proof is left as an exercise for the reader.\" Complete this proof.   From , we know that . Since and are all positive, if and only if .     Greatest common divisor and Diophantine equations (30 minutes)  Finish proof from Friday--end of notes from Week 3.    Let and let be a linear Diophantine equation. If , then the equation has no solutions. If then there are infinitely many solutions.       Since solutions exist  The linear Diophantine equation has infinitely many solutions for all by Theorem 6.2.Substituting into the original Diophantine equation gives which has infinitely many solutions by Theorem 6.2, since . Find them.  Find integral solutions to the Diophantine equation By inspection, is a particular solution. Then by Theorem 6.2, the solutions have the form     For a particular value of , the Diophantine equation has solutions, find them.  By inspection, is a particular solution. Then by Theorem 6.2, the solutions have the form     Then for .      Let and let be a linear Diophantine equation. If let Then has a solution for all by Theorem 6.2. Similarly, the linear Diophantine equation has infinitely many solutions by Theorem 6.2, since by the and by assumption. These solutions have the form where is a particular solution. Let be a particular solution to   To verify that these formulas for and give solutions to , we substitute into equation then      "
},
{
  "id": "sec-3dioph-2",
  "level": "2",
  "url": "sec-3dioph.html#sec-3dioph-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  Find the solutions to a specific Diophantine equation in three variables  Prove that when a Diophantine equation in three variables has a solutions, it has infinitely many.   "
},
{
  "id": "rqs-FTA-again-1",
  "level": "2",
  "url": "sec-3dioph.html#rqs-FTA-again-1",
  "type": "Reading Question",
  "number": "4.1.14.1.1.1",
  "title": "Finish proof of Theorem 1.19.",
  "body": "Finish proof of  The proof of ends with ``the cases and  and and are easily checked and are left as exercises. Do this.   When and then and . Then . Similarly for . When then and   "
},
{
  "id": "rqs-FTA-again-2",
  "level": "2",
  "url": "sec-3dioph.html#rqs-FTA-again-2",
  "type": "Reading Question",
  "number": "4.1.14.1.1.2",
  "title": "Proof of Corollary 1.20.",
  "body": "Proof of  For , the book states ``The (extremely easy) proof is left as an exercise for the reader.\" Complete this proof.   From , we know that . Since and are all positive, if and only if .  "
},
{
  "id": "sec-3dioph-4-3",
  "level": "2",
  "url": "sec-3dioph.html#sec-3dioph-4-3",
  "type": "Proposition",
  "number": "43",
  "title": "",
  "body": "  Let and let be a linear Diophantine equation. If , then the equation has no solutions. If then there are infinitely many solutions.   "
},
{
  "id": "sec-3dioph-4-4",
  "level": "2",
  "url": "sec-3dioph.html#sec-3dioph-4-4",
  "type": "Example",
  "number": "44",
  "title": "",
  "body": "   Since solutions exist  The linear Diophantine equation has infinitely many solutions for all by Theorem 6.2.Substituting into the original Diophantine equation gives which has infinitely many solutions by Theorem 6.2, since . Find them.  Find integral solutions to the Diophantine equation By inspection, is a particular solution. Then by Theorem 6.2, the solutions have the form     For a particular value of , the Diophantine equation has solutions, find them.  By inspection, is a particular solution. Then by Theorem 6.2, the solutions have the form     Then for .    "
},
{
  "id": "sec-3dioph-4-5",
  "level": "2",
  "url": "sec-3dioph.html#sec-3dioph-4-5",
  "type": "Proof",
  "number": "4.1.2.1",
  "title": "",
  "body": " Let and let be a linear Diophantine equation. If let Then has a solution for all by Theorem 6.2. Similarly, the linear Diophantine equation has infinitely many solutions by Theorem 6.2, since by the and by assumption. These solutions have the form where is a particular solution. Let be a particular solution to   To verify that these formulas for and give solutions to , we substitute into equation then    "
},
{
  "id": "sec-arthProgress",
  "level": "1",
  "url": "sec-arthProgress.html",
  "type": "Section",
  "number": "4.2",
  "title": "Wednesday February 7: Arithmetic progressions and introduction to equivalence relations",
  "body": " Wednesday February 7: Arithmetic progressions and introduction to equivalence relations    State and prove facts about prime factorizations using the Fundamental Theorem of Arithmetic  Prove there are infinitely many primes of the form  Prove a given set is an equivalence relation      Strayer, Appendix B    Equivalence relation practice  Let be the equivalence relation on  Prove that is an equivalence relation on   Describe the equivalence classes on    Since and the relation is reflexive.  If and the and so the relation is symmetric.  If and  and then and is transitive.  Note that if or for some and if or for some These conditions are both true with Thus, for       Practice with gcd proofs  Finish proof from Monday.  Strayer Chapter 1, Exercise 36    Do there exist integers and such that and ?  On Homework 3.    Prove that there exist infinitely many pairs of integers and such that and   Note that To ensure that not just and let where .    Let with Let . Then by Then since Thus, there are infinitely many        Strayer Chapter 1, Exercise 38  Let and be relatively prime integers. Prove that is either or   Using the hint in the back of the book and Exercise 37, which states for all not both   Let and note that and by linear combination   Rest on Homework 3.     Prime factorizations  Note on : In order to show this is not prime, must prove that the factors cannot be and the number itself. Hint: show that if one of the factors is the other is or (or ).  Corollary 1.20   Let with Then if and only if     A note on ``if and only if\" proofs:  You can do two directions:  If then  If then    Sometimes you can string together a series of ``if and only if statements.\" Definitions are always ``if and only if,\" even though rarely stated that way. For example, an integer is even if and only if there exist an integer such that :  An integer is even if and only if (definition of even)  if and only if there exist an integer such that (definition of ).      Dirichlet's Theorem   Let with and Then the arithmetic progression contains infinitely many primes.    Surprisingly, this proof involves complex analysis. The statement that there are infinitely many prime numbers is the case  You may not use this result to prove special cases, ie, specific values of and   Lemma 1.23   If such that and for some integers and then can also be written in that form.    We will not go over the proof in class.   Let and for some integers and Then    Proposition 1.22   There are infinitely may prime numbers expressible in the form where is a nonnegative integer.    Assume, by way of contradiction, that there are only finitely many prime numbers of the form say where the are distinct. Let If every prime factor of has the form then so does by repeated applications of . Thus, one of the prime factors of say have the for We consider two cases:  Case 1, : If then by linear combinations. Then Then by , either or This implies that for some However, are distinct primes not equal to so this is not possible. Therefore,  Case 2, for some :] If then by linear combinations. Then However, are distinct primes not equal to so this is not possible. Therefore, for    Therefore, has a prime divisor of the form which is not on the list which contradicts the assumption that are all primes of this form. Thus, there are infinitely many primes of the form      Equivalence Relation Practice   Prove that is an equivalence relation on    Let We must show that the relation is reflexive, symmetric, and transitive. To show the relation is reflexive, we must show Since    To show the relation is symmetric, we must show that if then If then there exists such that Therefore, and   To show the relation is transitive, we must show that if and then If then there exists such that   Similarly, if then there exists such that Therefore, and  Since the relation is reflexive, symmetric, and transitive, it is an equivalence relation.      "
},
{
  "id": "sec-arthProgress-2",
  "level": "2",
  "url": "sec-arthProgress.html#sec-arthProgress-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "  State and prove facts about prime factorizations using the Fundamental Theorem of Arithmetic  Prove there are infinitely many primes of the form  Prove a given set is an equivalence relation   "
},
{
  "id": "rqs-equiv-1",
  "level": "2",
  "url": "sec-arthProgress.html#rqs-equiv-1",
  "type": "Reading Question",
  "number": "4.2.14.2.1.1",
  "title": "Equivalence relation practice.",
  "body": "Equivalence relation practice  Let be the equivalence relation on  Prove that is an equivalence relation on   Describe the equivalence classes on    Since and the relation is reflexive.  If and the and so the relation is symmetric.  If and  and then and is transitive.  Note that if or for some and if or for some These conditions are both true with Thus, for    "
},
{
  "id": "sec-arthProgress-4-3",
  "level": "2",
  "url": "sec-arthProgress.html#sec-arthProgress-4-3",
  "type": "In Class Activity",
  "number": "6",
  "title": "Strayer Chapter 1, Exercise 36.",
  "body": "Strayer Chapter 1, Exercise 36    Do there exist integers and such that and ?  On Homework 3.    Prove that there exist infinitely many pairs of integers and such that and   Note that To ensure that not just and let where .    Let with Let . Then by Then since Thus, there are infinitely many        Strayer Chapter 1, Exercise 38  Let and be relatively prime integers. Prove that is either or   Using the hint in the back of the book and Exercise 37, which states for all not both   Let and note that and by linear combination   Rest on Homework 3.   "
},
{
  "id": "cor-lcm-gcd",
  "level": "2",
  "url": "sec-arthProgress.html#cor-lcm-gcd",
  "type": "Corollary",
  "number": "45",
  "title": "Corollary 1.20.",
  "body": "Corollary 1.20   Let with Then if and only if    "
},
{
  "id": "thm-dirichlet",
  "level": "2",
  "url": "sec-arthProgress.html#thm-dirichlet",
  "type": "Theorem",
  "number": "46",
  "title": "Dirichlet’s Theorem.",
  "body": "Dirichlet's Theorem   Let with and Then the arithmetic progression contains infinitely many primes.   "
},
{
  "id": "sec-arthProgress-5-7",
  "level": "2",
  "url": "sec-arthProgress.html#sec-arthProgress-5-7",
  "type": "Warning",
  "number": "47",
  "title": "",
  "body": "You may not use this result to prove special cases, ie, specific values of and  "
},
{
  "id": "lem-prod-goodprimes",
  "level": "2",
  "url": "sec-arthProgress.html#lem-prod-goodprimes",
  "type": "Lemma",
  "number": "48",
  "title": "Lemma 1.23.",
  "body": "Lemma 1.23   If such that and for some integers and then can also be written in that form.   "
},
{
  "id": "sec-arthProgress-5-10",
  "level": "2",
  "url": "sec-arthProgress.html#sec-arthProgress-5-10",
  "type": "Proof",
  "number": "4.2.3.1",
  "title": "",
  "body": " Let and for some integers and Then   "
},
{
  "id": "prop-inf-badprimes",
  "level": "2",
  "url": "sec-arthProgress.html#prop-inf-badprimes",
  "type": "Proposition",
  "number": "49",
  "title": "Proposition 1.22.",
  "body": "Proposition 1.22   There are infinitely may prime numbers expressible in the form where is a nonnegative integer.    Assume, by way of contradiction, that there are only finitely many prime numbers of the form say where the are distinct. Let If every prime factor of has the form then so does by repeated applications of . Thus, one of the prime factors of say have the for We consider two cases:  Case 1, : If then by linear combinations. Then Then by , either or This implies that for some However, are distinct primes not equal to so this is not possible. Therefore,  Case 2, for some :] If then by linear combinations. Then However, are distinct primes not equal to so this is not possible. Therefore, for    Therefore, has a prime divisor of the form which is not on the list which contradicts the assumption that are all primes of this form. Thus, there are infinitely many primes of the form    "
},
{
  "id": "sec-arthProgress-6-2",
  "level": "2",
  "url": "sec-arthProgress.html#sec-arthProgress-6-2",
  "type": "In Class Activity",
  "number": "7",
  "title": "",
  "body": " Prove that is an equivalence relation on    Let We must show that the relation is reflexive, symmetric, and transitive. To show the relation is reflexive, we must show Since    To show the relation is symmetric, we must show that if then If then there exists such that Therefore, and   To show the relation is transitive, we must show that if and then If then there exists such that   Similarly, if then there exists such that Therefore, and  Since the relation is reflexive, symmetric, and transitive, it is an equivalence relation.    "
},
{
  "id": "sec-modDef",
  "level": "1",
  "url": "sec-modDef.html",
  "type": "Section",
  "number": "4.3",
  "title": "Friday, February 9: Modular arithmetic",
  "body": "Friday, February 9: Modular arithmetic    Prove that congruence modulo is an equivalence relation on .  Define a complete residue system.  Practice using modular arithmetic.     Read Strayer, Section 2.1 through Example 1    The book concludes the section with a caution about division. It states that for all integers and . Explain why this is true  From the definition of congruence modulo  if and only if which is true for all integers and .     Quiz (10 min)   Definitions and examples of  Congruence modulo   ,  is congruent to modulo     ,  is not congruent to modulo     Let with We say that is congruent to modulo and write if , and is said to be the modulus of the congruence . The notation means is not congruent to modulo or is incongruent to modulo .       Let with We say that is congruent to modulo if and have the same remainder when divided by .    Be careful with this idea and negative values. Make sure you understand why or .    These two definitions of equivalence modulo are equivalent. That is, with  if and only if and have the same remainder when divided by .    Let with By the , there exists such that   If then by definition , there exists such that Thus, Rearranging, we get and Since we have Thus, so and have the same remainder when divided by .  In the other direction, if then Thus,       Let with Then if and only if and differ by a multiple of     Congruences generalize the concept of evenness and oddness. We typically think of even and odd as \"divisible by 2\" and \"not divisible by 2\", but a more useful interpretation is even means \"there is no remainder when divided by 2\" and \"there is a remainder of 1 when divided by 2\". This interpretation gives us more flexibility when replacing by or larger numbers. Instead of \"divisible\" or \"not divisible\" we have several gradations.  There's two major reasons. As we've already seen, calculations get simplified for modular arithmetic. We'll see later that taking MASSIVE powers of MASSIVE numbers is a fairly doable feat in modular arithmetic. The second reason is that by reducing a question from all integers to modular arithmetic, we often have an easier time seeing what is not allowed.   We will eventually find a function that generates all integers solutions to the equation (this can be done with only divisibility, so feel free to try for yourself after class).  Modular arithmetic allows us to say a few things about solutions.  Modulo : Note that and   Case 1: . In this case, and either or . So, we know  (Note: will eliminate the case)  Case 2: . In this case, and either . So, we know  Modulo : Note that , , and .  Case 1: . In this case, and . So, we know  Case 2: . In this case, could be or modulo . We also know , so  Case 3: has no solutions. So at least one of is even, and at least one is divisible by .     We can use the idea of congruences to simplify divisibility arguments   "
},
{
  "id": "sec-modDef-2",
  "level": "2",
  "url": "sec-modDef.html#sec-modDef-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "  Prove that congruence modulo is an equivalence relation on .  Define a complete residue system.  Practice using modular arithmetic.  "
},
{
  "id": "rqs-modIntro-1",
  "level": "2",
  "url": "sec-modDef.html#rqs-modIntro-1",
  "type": "Reading Question",
  "number": "4.3.14.3.1.1",
  "title": "The book concludes the section with a caution about division. It states that <span class=\"process-math\">\\(6a\\equiv 6b \\pmod 3\\)<\/span> for all integers <span class=\"process-math\">\\(a\\)<\/span> and <span class=\"process-math\">\\(b\\text{.}\\)<\/span> Explain why this is true.",
  "body": "The book concludes the section with a caution about division. It states that for all integers and . Explain why this is true  From the definition of congruence modulo  if and only if which is true for all integers and .  "
},
{
  "id": "def-mod-divides",
  "level": "2",
  "url": "sec-modDef.html#def-mod-divides",
  "type": "Definition",
  "number": "50",
  "title": "Congruence modulo <span class=\"process-math\">\\(m\\)<\/span>.",
  "body": "Congruence modulo   ,  is congruent to modulo     ,  is not congruent to modulo     Let with We say that is congruent to modulo and write if , and is said to be the modulus of the congruence . The notation means is not congruent to modulo or is incongruent to modulo .    "
},
{
  "id": "def-mod-remainder",
  "level": "2",
  "url": "sec-modDef.html#def-mod-remainder",
  "type": "Definition",
  "number": "51",
  "title": "",
  "body": "  Let with We say that is congruent to modulo if and have the same remainder when divided by .   "
},
{
  "id": "prop-mod-def-equiv",
  "level": "2",
  "url": "sec-modDef.html#prop-mod-def-equiv",
  "type": "Proposition",
  "number": "52",
  "title": "",
  "body": "  These two definitions of equivalence modulo are equivalent. That is, with  if and only if and have the same remainder when divided by .    Let with By the , there exists such that   If then by definition , there exists such that Thus, Rearranging, we get and Since we have Thus, so and have the same remainder when divided by .  In the other direction, if then Thus,    "
},
{
  "id": "cor-mod-third-def",
  "level": "2",
  "url": "sec-modDef.html#cor-mod-third-def",
  "type": "Corollary",
  "number": "53",
  "title": "",
  "body": "  Let with Then if and only if and differ by a multiple of    "
},
{
  "id": "sec-modDef-5-9",
  "level": "2",
  "url": "sec-modDef.html#sec-modDef-5-9",
  "type": "Example",
  "number": "54",
  "title": "",
  "body": " We will eventually find a function that generates all integers solutions to the equation (this can be done with only divisibility, so feel free to try for yourself after class).  Modular arithmetic allows us to say a few things about solutions.  Modulo : Note that and   Case 1: . In this case, and either or . So, we know  (Note: will eliminate the case)  Case 2: . In this case, and either . So, we know  Modulo : Note that , , and .  Case 1: . In this case, and . So, we know  Case 2: . In this case, could be or modulo . We also know , so  Case 3: has no solutions. So at least one of is even, and at least one is divisible by .    "
},
{
  "id": "sec-modIntro",
  "level": "1",
  "url": "sec-modIntro.html",
  "type": "Section",
  "number": "5.1",
  "title": "Monday, February 12: Peer review and introduction to congruences",
  "body": "Monday, February 12: Peer review and introduction to congruences    Prove basic facts about modular arithmetic.  Understand gaps in argument and writing of proof of Exercise 83. Give classmates useful feedback on their proofs.    Proposition and examples of  On Friday, we had two definitions of congruence modulo  and , as well as a third equivalent definition . Different statements of the definition will be useful in different situations.  Restatement of Strayer Propositions 2.1, 2.4, and 2.5   Let with Then:  and implies   and implies   and implies .  and , implies   implies for .      Let with   Assume and Then using the second definition of equivalence modulo , there exists such that Thus, and have the same remainder when divided by so    Assume and Then by the third definition of equivalence modulo , there exists such that and Thus, Thus, and   Assume and with From the first definition of equivalence modulo  . Since division is transitive, so   Assume and From the third definition of equivalence modulo there exists such that Thus, so       Let denote integers, then: Let's look at the various parts of this Lemma and see what they tell us about how congruences and moduli work.  The first two parts tell us that congruences behave a lot like equality.  The last two parts tell us how we can manipulate the modulus . We can replace the modulus with a divisor of it at any time. We can replace the modulus with a multiple of it, provided we multiply and by the same multiple.  The remaining two parts are perhaps the most useful: they let us do arithmetic with congruences. In particular, they imply that whenever I'm adding or multiplying numbers, I can replace the numbers I have with any equivalent number that is more convenient to use. So for example, or .  Note that this doesn't work for powers. It is not the case that . Also, unlike for regular equality, we cannot cancel a common factor of both sides unless it is relatively prime to . That is to say implies if . (If we'll talk more on this later.)   Note that . Then by Proposition 2.4, part (b) , since From part 5, but     Peer review Chapter 1 Exercise 83 (20 minutes)   "
},
{
  "id": "sec-modIntro-2",
  "level": "2",
  "url": "sec-modIntro.html#sec-modIntro-2",
  "type": "Objectives",
  "number": "5.1",
  "title": "",
  "body": "  Prove basic facts about modular arithmetic.  Understand gaps in argument and writing of proof of Exercise 83. Give classmates useful feedback on their proofs.   "
},
{
  "id": "thm-basic-mod-arith",
  "level": "2",
  "url": "sec-modIntro.html#thm-basic-mod-arith",
  "type": "Theorem",
  "number": "55",
  "title": "Restatement of Strayer Propositions 2.1, 2.4, and 2.5.",
  "body": "Restatement of Strayer Propositions 2.1, 2.4, and 2.5   Let with Then:  and implies   and implies   and implies .  and , implies   implies for .      Let with   Assume and Then using the second definition of equivalence modulo , there exists such that Thus, and have the same remainder when divided by so    Assume and Then by the third definition of equivalence modulo , there exists such that and Thus, Thus, and   Assume and with From the first definition of equivalence modulo  . Since division is transitive, so   Assume and From the third definition of equivalence modulo there exists such that Thus, so      "
},
{
  "id": "sec-modIntro-3-9",
  "level": "2",
  "url": "sec-modIntro.html#sec-modIntro-3-9",
  "type": "Example",
  "number": "56",
  "title": "",
  "body": " Note that . Then by Proposition 2.4, part (b) , since From part 5, but   "
},
{
  "id": "ch-week5-3",
  "level": "1",
  "url": "ch-week5-3.html",
  "type": "Section",
  "number": "5.2",
  "title": "Wednesday, February 14: More congruence facts",
  "body": "Wednesday, February 14: More congruence facts    Prove that is a complete residue system modulo .   Basic facts of working modulo   complete residue system   Let with . We call the set of all such that the equivalence class of . A set of integers such that every integer is congruent modulo is called a complete residue system modulo .     Consequence 2.2   Let be a positive integer. Then equivalence modulo partition the integers. That is, every integer is in exactly one equivalence class modulo .    This is an immediate consequence of the fact that equivalence modulo is an equivalence relation.    Notice that this arguments also simplifies the proof the is a complete residue system modulo .  Strayer, Proposition 2.3   The set is a complete residue system modulo .    Let with . By the , there exist unique such that with . In fact, since we know or . Therefore, every integer is in the equivalence class of or modulo . Since every integer is in exactly one equivalence class modulo , and the remainder from the is unique, it is not possible for to be equivalent to any other element of .     Practice: addition and multiplication tabulars modulo . I am adding to include an odd composite.  Modulo    +  [0]  [1]  [2]    [0]  [0]  [1]  [2]    [1]  [1]  [2]  [0]    [2]  [2]  [0]  [1]         [0]  [1]  [2]    [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]    [2]  [0]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]    [0]  [0]  [1]  [2]  [3]    [1]  [1]  [2]  [3]  [0]    [2]  [2]  [3]  [0]  [1]    [3]  [3]  [0]  [1]  [2]         [0]  [1]  [2]  [3]    [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]    [2]  [0]  [2]  [0]  [2]    [3]  [0]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]    [0]  [0]  [1]  [2]  [3]  [4]    [1]  [1]  [2]  [3]  [4]  [0]    [2]  [2]  [3]  [4]  [0]  [1]    [3]  [3]  [4]  [0]  [1]  [0]    [4]  [4]  [0]  [1]  [2]  [3]         [0]  [1]  [2]  [3]  [4]    [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]    [2]  [0]  [2]  [4]  [1]  [3]    [3]  [0]  [3]  [1]  [4]  [2]    [4]  [0]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]    [0]  [0]  [1]  [2]  [3]  [4]  [5]    [1]  [1]  [2]  [3]  [4]  [5]  [0]    [2]  [2]  [3]  [4]  [5]  [0]  [1]    [3]  [3]  [4]  [5]  [0]  [1]  [2]    [4]  [4]  [5]  [0]  [1]  [2]  [3]    [5]  [5]  [0]  [1]  [2]  [3]  [4]         [0]  [1]  [2]  [3]  [4]  [5]    [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]    [2]  [0]  [2]  [4]  [0]  [2]  [4]    [3]  [0]  [3]  [0]  [3]  [0]  [3]    [4]  [0]  [4]  [2]  [0]  [4]  [2]    [5]  [0]  [5]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [0]  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [1]  [1]  [2]  [3]  [4]  [5]  [6]  [0]    [2]  [2]  [3]  [4]  [5]  [6]  [0]  [1]    [3]  [3]  [4]  [5]  [6]  [0]  [1]  [2]    [4]  [4]  [5]  [6]  [0]  [1]  [2]  [3]    [5]  [5]  [6]  [0]  [1]  [2]  [3]  [4]    [6]  [6]  [0]  [1]  [2]  [3]  [4]  [5]        [0]  [1]  [2]  [3]  [4]  [5]  [6]    [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [2]  [0]  [2]  [4]  [6]  [1]  [3]  [5]    [3]  [0]  [3]  [6]  [2]  [5]  [1]  [4]    [4]  [0]  [4]  [1]  [5]  [2]  [6]  [3]    [5]  [0]  [5]  [3]  [1]  [6]  [4]  [2]    [6]  [0]  [6]  [5]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [0]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [1]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [0]    [2]  [2]  [3]  [4]  [5]  [6]  [7]  [0]  [1]    [3]  [3]  [4]  [5]  [6]  [7]  [0]  [1]  [2]    [4]  [4]  [5]  [6]  [7]  [0]  [1]  [2]  [3]    [5]  [5]  [6]  [7]  [0]  [1]  [2]  [3]  [4]    [6]  [6]  [7]  [0]  [1]  [2]  [3]  [4]  [5]    [7]  [7]  [0]  [1]  [2]  [3]  [4]  [5]  [6]        [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [2]  [0]  [2]  [4]  [6]  [0]  [2]  [4]  [6]    [3]  [0]  [3]  [6]  [1]  [4]  [7]  [2]  [5]    [4]  [0]  [4]  [0]  [4]  [0]  [4]  [0]  [4]    [5]  [0]  [5]  [2]  [7]  [4]  [1]  [6]  [3]    [6]  [0]  [6]  [4]  [2]  [0]  [6]  [4]  [2]    [7]  [0]  [7]  [6]  [5]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [0]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [1]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [0]    [2]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [0]  [1]    [3]  [3]  [4]  [5]  [6]  [7]  [8]  [0]  [1]  [2]    [4]  [4]  [5]  [6]  [7]  [8]  [0]  [1]  [2]  [3]    [5]  [5]  [6]  [7]  [8]  [0]  [1]  [2]  [3]  [4]    [6]  [6]  [7]  [8]  [0]  [1]  [2]  [3]  [4]  [5]    [7]  [7]  [8]  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [8]  [8]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]        [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [2]  [0]  [2]  [4]  [6]  [0]  [1]  [3]  [5]  [7]    [3]  [0]  [3]  [6]  [0]  [3]  [6]  [0]  [3]  [6]    [4]  [0]  [4]  [8]  [3]  [7]  [2]  [6]  [1]  [5]    [5]  [0]  [5]  [1]  [6]  [2]  [7]  [3]  [8]  [4]    [6]  [0]  [6]  [3]  [0]  [6]  [3]  [0]  [6]  [3]    [7]  [0]  [7]  [5]  [3]  [1]  [8]  [6]  [4]  [2]    [8]  [0]  [8]  [7]  [6]  [5]  [4]  [3]  [2]  [1]         "
},
{
  "id": "ch-week5-3-2",
  "level": "2",
  "url": "ch-week5-3.html#ch-week5-3-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "  Prove that is a complete residue system modulo .  "
},
{
  "id": "def-comp-res-sys",
  "level": "2",
  "url": "ch-week5-3.html#def-comp-res-sys",
  "type": "Definition",
  "number": "57",
  "title": "complete residue system.",
  "body": "complete residue system   Let with . We call the set of all such that the equivalence class of . A set of integers such that every integer is congruent modulo is called a complete residue system modulo .    "
},
{
  "id": "cor-mod-partition",
  "level": "2",
  "url": "ch-week5-3.html#cor-mod-partition",
  "type": "Corollary",
  "number": "58",
  "title": "Consequence 2.2.",
  "body": "Consequence 2.2   Let be a positive integer. Then equivalence modulo partition the integers. That is, every integer is in exactly one equivalence class modulo .    This is an immediate consequence of the fact that equivalence modulo is an equivalence relation.   "
},
{
  "id": "prop-complete-residue",
  "level": "2",
  "url": "ch-week5-3.html#prop-complete-residue",
  "type": "Proposition",
  "number": "59",
  "title": "Strayer, Proposition 2.3.",
  "body": "Strayer, Proposition 2.3   The set is a complete residue system modulo .    Let with . By the , there exist unique such that with . In fact, since we know or . Therefore, every integer is in the equivalence class of or modulo . Since every integer is in exactly one equivalence class modulo , and the remainder from the is unique, it is not possible for to be equivalent to any other element of .   "
},
{
  "id": "ch-week5-3-3-6",
  "level": "2",
  "url": "ch-week5-3.html#ch-week5-3-3-6",
  "type": "In Class Activity",
  "number": "8",
  "title": "",
  "body": " Practice: addition and multiplication tabulars modulo . I am adding to include an odd composite.  Modulo    +  [0]  [1]  [2]    [0]  [0]  [1]  [2]    [1]  [1]  [2]  [0]    [2]  [2]  [0]  [1]         [0]  [1]  [2]    [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]    [2]  [0]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]    [0]  [0]  [1]  [2]  [3]    [1]  [1]  [2]  [3]  [0]    [2]  [2]  [3]  [0]  [1]    [3]  [3]  [0]  [1]  [2]         [0]  [1]  [2]  [3]    [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]    [2]  [0]  [2]  [0]  [2]    [3]  [0]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]    [0]  [0]  [1]  [2]  [3]  [4]    [1]  [1]  [2]  [3]  [4]  [0]    [2]  [2]  [3]  [4]  [0]  [1]    [3]  [3]  [4]  [0]  [1]  [0]    [4]  [4]  [0]  [1]  [2]  [3]         [0]  [1]  [2]  [3]  [4]    [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]    [2]  [0]  [2]  [4]  [1]  [3]    [3]  [0]  [3]  [1]  [4]  [2]    [4]  [0]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]    [0]  [0]  [1]  [2]  [3]  [4]  [5]    [1]  [1]  [2]  [3]  [4]  [5]  [0]    [2]  [2]  [3]  [4]  [5]  [0]  [1]    [3]  [3]  [4]  [5]  [0]  [1]  [2]    [4]  [4]  [5]  [0]  [1]  [2]  [3]    [5]  [5]  [0]  [1]  [2]  [3]  [4]         [0]  [1]  [2]  [3]  [4]  [5]    [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]    [2]  [0]  [2]  [4]  [0]  [2]  [4]    [3]  [0]  [3]  [0]  [3]  [0]  [3]    [4]  [0]  [4]  [2]  [0]  [4]  [2]    [5]  [0]  [5]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [0]  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [1]  [1]  [2]  [3]  [4]  [5]  [6]  [0]    [2]  [2]  [3]  [4]  [5]  [6]  [0]  [1]    [3]  [3]  [4]  [5]  [6]  [0]  [1]  [2]    [4]  [4]  [5]  [6]  [0]  [1]  [2]  [3]    [5]  [5]  [6]  [0]  [1]  [2]  [3]  [4]    [6]  [6]  [0]  [1]  [2]  [3]  [4]  [5]        [0]  [1]  [2]  [3]  [4]  [5]  [6]    [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [2]  [0]  [2]  [4]  [6]  [1]  [3]  [5]    [3]  [0]  [3]  [6]  [2]  [5]  [1]  [4]    [4]  [0]  [4]  [1]  [5]  [2]  [6]  [3]    [5]  [0]  [5]  [3]  [1]  [6]  [4]  [2]    [6]  [0]  [6]  [5]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [0]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [1]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [0]    [2]  [2]  [3]  [4]  [5]  [6]  [7]  [0]  [1]    [3]  [3]  [4]  [5]  [6]  [7]  [0]  [1]  [2]    [4]  [4]  [5]  [6]  [7]  [0]  [1]  [2]  [3]    [5]  [5]  [6]  [7]  [0]  [1]  [2]  [3]  [4]    [6]  [6]  [7]  [0]  [1]  [2]  [3]  [4]  [5]    [7]  [7]  [0]  [1]  [2]  [3]  [4]  [5]  [6]        [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]    [2]  [0]  [2]  [4]  [6]  [0]  [2]  [4]  [6]    [3]  [0]  [3]  [6]  [1]  [4]  [7]  [2]  [5]    [4]  [0]  [4]  [0]  [4]  [0]  [4]  [0]  [4]    [5]  [0]  [5]  [2]  [7]  [4]  [1]  [6]  [3]    [6]  [0]  [6]  [4]  [2]  [0]  [6]  [4]  [2]    [7]  [0]  [7]  [6]  [5]  [4]  [3]  [2]  [1]     Modulo    +  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [0]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [1]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [0]    [2]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [0]  [1]    [3]  [3]  [4]  [5]  [6]  [7]  [8]  [0]  [1]  [2]    [4]  [4]  [5]  [6]  [7]  [8]  [0]  [1]  [2]  [3]    [5]  [5]  [6]  [7]  [8]  [0]  [1]  [2]  [3]  [4]    [6]  [6]  [7]  [8]  [0]  [1]  [2]  [3]  [4]  [5]    [7]  [7]  [8]  [0]  [1]  [2]  [3]  [4]  [5]  [6]    [8]  [8]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]        [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]  [0]    [1]  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]    [2]  [0]  [2]  [4]  [6]  [0]  [1]  [3]  [5]  [7]    [3]  [0]  [3]  [6]  [0]  [3]  [6]  [0]  [3]  [6]    [4]  [0]  [4]  [8]  [3]  [7]  [2]  [6]  [1]  [5]    [5]  [0]  [5]  [1]  [6]  [2]  [7]  [3]  [8]  [4]    [6]  [0]  [6]  [3]  [0]  [6]  [3]  [0]  [6]  [3]    [7]  [0]  [7]  [5]  [3]  [1]  [8]  [6]  [4]  [2]    [8]  [0]  [8]  [7]  [6]  [5]  [4]  [3]  [2]  [1]       "
},
{
  "id": "ch-week5-4",
  "level": "1",
  "url": "ch-week5-4.html",
  "type": "Section",
  "number": "5.3",
  "title": "Friday, February 16: Linear congruences in one variable",
  "body": "Friday, February 16: Linear congruences in one variable    Prove when a linear congruence in one variable has a solution  All all solutions to a linear congruence given a particular solution  Find the number of incongruent solutions to a linear congruence    Quiz (10 min)   Linear congruences in one variable   Let with . Every row\/column of addition modulo contains . We can also say that always has a solution, since .   Strayer Theorem 2.6 and Porism 2.7   Let with and . The linear congruence in one variable has a solution if and only if . When there are exactly incongruent solutions modulo corresponding to the congruence classes     Let with , and . From the definition of congruence modulo , if and only if . That is, if and only if for some from the definition of divisibility . Since is a linear Diophantine equation, says solutions exist if and only if   In the case that solutions exist, let be a particular solution to the linear Diophantine equation. Then is also a solution to the linear congruence in one variable, since implies . From Theorem 6.2, all solutions have the from for all We need to show that these solutions are in exactly distinct congruence classes modulo   Consider the solutions and for some integers and Then if and only if That is, if and only if there exists such that . Rearranging this equation, we get that if and only if Thus, by definition of modulo Thus, the incongruent solutions to are the congruence classes      Let's consider several linear congruences modulo   The linear congruence has no solutions, since   The linear congruence has solutions if and only if . Considering the least nonnegative residues, the options for are:  The incongruent solutions are  The incongruent solutions are Notice we cannot divide across the equivalence, since has no solutions.  The incongruent solutions are    The linear congruence has solution Since the solution is unique.  The linear congruence has solution Since the solution is unique. Note that instead of we could have done      multiplicative inverse of modulo   Let with and We call the unique incongruent solution to the multiplicative inverse of modulo .    "
},
{
  "id": "ch-week5-4-2",
  "level": "2",
  "url": "ch-week5-4.html#ch-week5-4-2",
  "type": "Objectives",
  "number": "5.3",
  "title": "",
  "body": "  Prove when a linear congruence in one variable has a solution  All all solutions to a linear congruence given a particular solution  Find the number of incongruent solutions to a linear congruence   "
},
{
  "id": "remark-add-inverse",
  "level": "2",
  "url": "ch-week5-4.html#remark-add-inverse",
  "type": "Remark",
  "number": "60",
  "title": "",
  "body": " Let with . Every row\/column of addition modulo contains . We can also say that always has a solution, since .  "
},
{
  "id": "thm-lin-cong-solutions",
  "level": "2",
  "url": "ch-week5-4.html#thm-lin-cong-solutions",
  "type": "Theorem",
  "number": "61",
  "title": "Strayer Theorem 2.6 and Porism 2.7.",
  "body": "Strayer Theorem 2.6 and Porism 2.7   Let with and . The linear congruence in one variable has a solution if and only if . When there are exactly incongruent solutions modulo corresponding to the congruence classes     Let with , and . From the definition of congruence modulo , if and only if . That is, if and only if for some from the definition of divisibility . Since is a linear Diophantine equation, says solutions exist if and only if   In the case that solutions exist, let be a particular solution to the linear Diophantine equation. Then is also a solution to the linear congruence in one variable, since implies . From Theorem 6.2, all solutions have the from for all We need to show that these solutions are in exactly distinct congruence classes modulo   Consider the solutions and for some integers and Then if and only if That is, if and only if there exists such that . Rearranging this equation, we get that if and only if Thus, by definition of modulo Thus, the incongruent solutions to are the congruence classes    "
},
{
  "id": "ch-week5-4-4-4",
  "level": "2",
  "url": "ch-week5-4.html#ch-week5-4-4-4",
  "type": "Example",
  "number": "62",
  "title": "",
  "body": " Let's consider several linear congruences modulo   The linear congruence has no solutions, since   The linear congruence has solutions if and only if . Considering the least nonnegative residues, the options for are:  The incongruent solutions are  The incongruent solutions are Notice we cannot divide across the equivalence, since has no solutions.  The incongruent solutions are    The linear congruence has solution Since the solution is unique.  The linear congruence has solution Since the solution is unique. Note that instead of we could have done     "
},
{
  "id": "def-mult-inv",
  "level": "2",
  "url": "ch-week5-4.html#def-mult-inv",
  "type": "Definition",
  "number": "63",
  "title": "multiplicative inverse of <span class=\"process-math\">\\(a\\)<\/span> modulo <span class=\"process-math\">\\(m\\)<\/span>.",
  "body": "multiplicative inverse of modulo   Let with and We call the unique incongruent solution to the multiplicative inverse of modulo .   "
},
{
  "id": "sec-CRT",
  "level": "1",
  "url": "sec-CRT.html",
  "type": "Section",
  "number": "6.1",
  "title": "Monday, February 19: Chinese Remainder Theorem",
  "body": "Monday, February 19: Chinese Remainder Theorem    Solve system of linear equations in one variable.  Prove the Chinese Remainder Theorem.      None    Multiplicative inverses From Friday Corollary 2.8  Let with The linear congruence in one variable has a solution if and only if . If then the solution is unique modulo .   multiplicative inverse of modulo   Let with and We call the unique incongruent solution to the multiplicative inverse of modulo .    Examples of multiplicative inverses:  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  Example using multiplicative inverses:     Find and Is there a pattern?      For a prime  .  We do need the condition that is prime. For example, and      Simultaneous Linear congruences in one variable (30 min)  Consider the system of linear equations A slow way to find an integer that satisfies all three congruences is to write out the congruence classes: and see what integers are on all three lists. In addition to being tedius, we this doesn't help find all such integers. To find all such integers, define and Then each is relatively prime to by construction. Thus, by the congruences have solutions. Thus, and Note that Thus, is a solution to all three congruences.  Chinese Remainder Theorem   Let be pairwise relatively prime positive integers (that is, any pair when ). Let be integers. Then the system of congruences has a unique solution modulo . This solution has the form where and .    Let be pairwise relatively prime positive integers. We start by constructing a solution modulo . By construction, is an integer. Since each the are pairwise relatively prime, . Thus, by , for each there is an integer where . Thus . We also have that when , so when . Let Then for each and when Thus, we have found a solution to the system of equivalences.  To show the solution is unique modulo consider two solutions Then for each Thus . Since when  and Thus,      "
},
{
  "id": "sec-CRT-2",
  "level": "2",
  "url": "sec-CRT.html#sec-CRT-2",
  "type": "Objectives",
  "number": "6.1",
  "title": "",
  "body": "  Solve system of linear equations in one variable.  Prove the Chinese Remainder Theorem.   "
},
{
  "id": "cor-condition-invertible",
  "level": "2",
  "url": "sec-CRT.html#cor-condition-invertible",
  "type": "Corollary",
  "number": "64",
  "title": "Corollary 2.8.",
  "body": "Corollary 2.8  Let with The linear congruence in one variable has a solution if and only if . If then the solution is unique modulo .  "
},
{
  "id": "def-mult-inv",
  "level": "2",
  "url": "sec-CRT.html#def-mult-inv",
  "type": "Definition",
  "number": "65",
  "title": "multiplicative inverse of <span class=\"process-math\">\\(a\\)<\/span> modulo <span class=\"process-math\">\\(m\\)<\/span>.",
  "body": "multiplicative inverse of modulo   Let with and We call the unique incongruent solution to the multiplicative inverse of modulo .   "
},
{
  "id": "ex-mult-inv",
  "level": "2",
  "url": "sec-CRT.html#ex-mult-inv",
  "type": "Example",
  "number": "66",
  "title": "",
  "body": "Examples of multiplicative inverses:  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  so is the multiplicative inverse of modulo and is the multiplicative inverse of modulo .  Example using multiplicative inverses:  "
},
{
  "id": "sec-CRT-4-5",
  "level": "2",
  "url": "sec-CRT.html#sec-CRT-4-5",
  "type": "In Class Activity",
  "number": "9",
  "title": "",
  "body": "  Find and Is there a pattern?      For a prime  .  We do need the condition that is prime. For example, and    "
},
{
  "id": "sec-CRT-5-2",
  "level": "2",
  "url": "sec-CRT.html#sec-CRT-5-2",
  "type": "Example",
  "number": "67",
  "title": "",
  "body": "Consider the system of linear equations A slow way to find an integer that satisfies all three congruences is to write out the congruence classes: and see what integers are on all three lists. In addition to being tedius, we this doesn't help find all such integers. To find all such integers, define and Then each is relatively prime to by construction. Thus, by the congruences have solutions. Thus, and Note that Thus, is a solution to all three congruences. "
},
{
  "id": "CRT",
  "level": "2",
  "url": "sec-CRT.html#CRT",
  "type": "Theorem",
  "number": "68",
  "title": "Chinese Remainder Theorem.",
  "body": "Chinese Remainder Theorem   Let be pairwise relatively prime positive integers (that is, any pair when ). Let be integers. Then the system of congruences has a unique solution modulo . This solution has the form where and .    Let be pairwise relatively prime positive integers. We start by constructing a solution modulo . By construction, is an integer. Since each the are pairwise relatively prime, . Thus, by , for each there is an integer where . Thus . We also have that when , so when . Let Then for each and when Thus, we have found a solution to the system of equivalences.  To show the solution is unique modulo consider two solutions Then for each Thus . Since when  and Thus,    "
},
{
  "id": "sec-wilson",
  "level": "1",
  "url": "sec-wilson.html",
  "type": "Section",
  "number": "6.2",
  "title": "Wednesday, February 21: Wilson’s Theorem",
  "body": "Wednesday, February 21: Wilson's Theorem    Characterize when is its own inverse modulo a prime.  Prove Wilson's Theorem and its converse     Read Strayer, Section 2.4    Does this match with your conjecture from Exercise 5? If not, what is the difference?    Wilson's Theorem  Lemma 2.10   Let be a prime number and Then is its own inverse modulo if and only if     Let be a prime number and Then is its own inverse modulo if and only if if and only if Since is prime, or by . Thus,       Let be a prime. Then if and only if      It is important to note why we require is prime. is only true for primes:  is true when   and or and  Let for some integer Then Since either or is even, for some Thus, for all odd integers   When then  When then for some Thus and .  When then for some Thus and .  When then     Wilson's Theorem   Let be a prime number. Then     When  Now consider an odd prime. By , each has a unique multiplicative inverse modulo  says the only elements that are their own multiplicative inverse are and . Thus is the product of and pairs of where Therefore,     Wilson's Theorem is normally stated as above, but the converse is also true. It can also be a (very ineffective) prime test.  Proposition 2.12   Let be a positive integer. If then is prime.    Let and be positive integers where It suffices to show that if then If then If then by the definition of factorial. Then implies by transitivity of division. Thus, by linear combination and Therefore, the only positive factors of are and so is prime.    Part of Strayer, Chapter 2 Exercise 47   Let be an odd prime. Use (a) to show  If then  If then         Let be a prime with Then for some From part (a),   Let be a prime with Then for some From part (a),       On Paper 2, Polynomial Factorization option   Let be a prime number. The congruence has solutions if and only if or      "
},
{
  "id": "sec-wilson-2",
  "level": "2",
  "url": "sec-wilson.html#sec-wilson-2",
  "type": "Objectives",
  "number": "6.2",
  "title": "",
  "body": "  Characterize when is its own inverse modulo a prime.  Prove Wilson's Theorem and its converse  "
},
{
  "id": "rqs-willson-1",
  "level": "2",
  "url": "sec-wilson.html#rqs-willson-1",
  "type": "Reading Question",
  "number": "6.2.16.2.1.1",
  "title": "",
  "body": "Does this match with your conjecture from Exercise 5? If not, what is the difference? "
},
{
  "id": "lem-sqrt1",
  "level": "2",
  "url": "sec-wilson.html#lem-sqrt1",
  "type": "Lemma",
  "number": "69",
  "title": "Lemma 2.10.",
  "body": "Lemma 2.10   Let be a prime number and Then is its own inverse modulo if and only if     Let be a prime number and Then is its own inverse modulo if and only if if and only if Since is prime, or by . Thus,    "
},
{
  "id": "cor-sqrt1",
  "level": "2",
  "url": "sec-wilson.html#cor-sqrt1",
  "type": "Corollary",
  "number": "70",
  "title": "",
  "body": "  Let be a prime. Then if and only if    "
},
{
  "id": "sec-wilson-4-4",
  "level": "2",
  "url": "sec-wilson.html#sec-wilson-4-4",
  "type": "Remark",
  "number": "71",
  "title": "",
  "body": " It is important to note why we require is prime. is only true for primes:  is true when   and or and  Let for some integer Then Since either or is even, for some Thus, for all odd integers   When then  When then for some Thus and .  When then for some Thus and .  When then    "
},
{
  "id": "Wilson",
  "level": "2",
  "url": "sec-wilson.html#Wilson",
  "type": "Theorem",
  "number": "72",
  "title": "Wilson’s Theorem.",
  "body": "Wilson's Theorem   Let be a prime number. Then     When  Now consider an odd prime. By , each has a unique multiplicative inverse modulo  says the only elements that are their own multiplicative inverse are and . Thus is the product of and pairs of where Therefore,    "
},
{
  "id": "Wilson-converse",
  "level": "2",
  "url": "sec-wilson.html#Wilson-converse",
  "type": "Proposition",
  "number": "73",
  "title": "Proposition 2.12.",
  "body": "Proposition 2.12   Let be a positive integer. If then is prime.    Let and be positive integers where It suffices to show that if then If then If then by the definition of factorial. Then implies by transitivity of division. Thus, by linear combination and Therefore, the only positive factors of are and so is prime.   "
},
{
  "id": "sec-wilson-4-8",
  "level": "2",
  "url": "sec-wilson.html#sec-wilson-4-8",
  "type": "In Class Activity",
  "number": "10",
  "title": "Part of Strayer, Chapter 2 Exercise 47.",
  "body": "Part of Strayer, Chapter 2 Exercise 47   Let be an odd prime. Use (a) to show  If then  If then         Let be a prime with Then for some From part (a),   Let be a prime with Then for some From part (a),      "
},
{
  "id": "thm-sqrt-1",
  "level": "2",
  "url": "sec-wilson.html#thm-sqrt-1",
  "type": "Theorem",
  "number": "74",
  "title": "On Paper 2, Polynomial Factorization option.",
  "body": "On Paper 2, Polynomial Factorization option   Let be a prime number. The congruence has solutions if and only if or    "
},
{
  "id": "sec-FlT",
  "level": "1",
  "url": "sec-FlT.html",
  "type": "Section",
  "number": "6.3",
  "title": "Friday, February 23: Euler’s Theorem and Fermat’s Little Theorem",
  "body": "Friday, February 23: Euler's Theorem and Fermat's Little Theorem    Define and find a reduced residue system modulo  Define the Euler -function  Prove Euler's Generalization of Fermat's Little Theorem      Read Strayer, Section 2.5    Exercise 50  Prove that by following the steps of the proof of Fermat's Little Theorem.   Consider the integers given by Note that for since is prime and and By , since if implies Therefore, no two of are congruent modulo So the least nonnegative residues modulo of the integers taken in some order, must be Then or, equivalently, By , the congruence above becomes which is equivalent to      Quiz (10 min)   Euler's Generalization of Fermat's Little Theorem  There are several different ways to present the material in Sections 2.4 through 2.6. In class, we will do the other order: Fermat's Little Theorem to prove Wilson's Theorem. I will keep the result numbering from the book, so they will be out of order.  Reduced residue system modulo   Let be a positive integer. We say that is a reduced residue system modulo if  for all  when  for all with  for some         The sets and are both reduced residue systems modulo  If is prime, then is a complete residue system modulo If  is a complete residue system modulo  The sets and are both reduced residue systems modulo     Porism 2.18   Let be a positive integer and let be a reduced residue system modulo If with then is a reduced residue system modulo     This result is also implicitly used in the proof of since is a reduced residue system.   Let be a reduced residue system modulo and with Since and have the same number of elements, it suffices to show that and for If there exist some prime such that then and by definition . By , or , so either or which is a contradiction. Thus,   By , if and only Since  when .   Euler -function    Euler -function    Let be a positive integer. The Euler -function  is     For a positive integer  is the number of reduced residues modulo       If is prime,       Euler's Generalization of   Let with If then     Fermat's Little Theorem   Let be prime and If then     Let be prime and then if and only if Since       The converse of both of these theorems is false. The easiest example is for all positive integers . Also note that . Since there exists an integer such that Thus However,    Proof of  Let be a positive integer and let be a reduced residue system modulo If with then is a reduced residue system modulo by . Thus, for all then for some Thus   Since there exists such that Thus,     "
},
{
  "id": "sec-FlT-2",
  "level": "2",
  "url": "sec-FlT.html#sec-FlT-2",
  "type": "Objectives",
  "number": "6.3",
  "title": "",
  "body": "  Define and find a reduced residue system modulo  Define the Euler -function  Prove Euler's Generalization of Fermat's Little Theorem   "
},
{
  "id": "rqs-FlT-1",
  "level": "2",
  "url": "sec-FlT.html#rqs-FlT-1",
  "type": "Reading Question",
  "number": "6.3.16.3.1.1",
  "title": "Exercise 50.",
  "body": "Exercise 50  Prove that by following the steps of the proof of Fermat's Little Theorem.   Consider the integers given by Note that for since is prime and and By , since if implies Therefore, no two of are congruent modulo So the least nonnegative residues modulo of the integers taken in some order, must be Then or, equivalently, By , the congruence above becomes which is equivalent to   "
},
{
  "id": "defn-reduced-res-sys",
  "level": "2",
  "url": "sec-FlT.html#defn-reduced-res-sys",
  "type": "Definition",
  "number": "75",
  "title": "Reduced residue system modulo <span class=\"process-math\">\\(m\\)<\/span>.",
  "body": "Reduced residue system modulo   Let be a positive integer. We say that is a reduced residue system modulo if  for all  when  for all with  for some     "
},
{
  "id": "ex-red-sys",
  "level": "2",
  "url": "sec-FlT.html#ex-red-sys",
  "type": "Example",
  "number": "76",
  "title": "",
  "body": "   The sets and are both reduced residue systems modulo  If is prime, then is a complete residue system modulo If  is a complete residue system modulo  The sets and are both reduced residue systems modulo    "
},
{
  "id": "lem-red-sys",
  "level": "2",
  "url": "sec-FlT.html#lem-red-sys",
  "type": "Lemma",
  "number": "77",
  "title": "Porism 2.18.",
  "body": "Porism 2.18   Let be a positive integer and let be a reduced residue system modulo If with then is a reduced residue system modulo    "
},
{
  "id": "sec-FlT-5-7",
  "level": "2",
  "url": "sec-FlT.html#sec-FlT-5-7",
  "type": "Proof",
  "number": "6.3.3.1",
  "title": "",
  "body": " Let be a reduced residue system modulo and with Since and have the same number of elements, it suffices to show that and for If there exist some prime such that then and by definition . By , or , so either or which is a contradiction. Thus,   By , if and only Since  when .  "
},
{
  "id": "def-phi-fn",
  "level": "2",
  "url": "sec-FlT.html#def-phi-fn",
  "type": "Definition",
  "number": "78",
  "title": "Euler <span class=\"process-math\">\\(\\phi\\)<\/span>-function.",
  "body": "Euler -function    Euler -function    Let be a positive integer. The Euler -function  is    "
},
{
  "id": "sec-FlT-5-9",
  "level": "2",
  "url": "sec-FlT.html#sec-FlT-5-9",
  "type": "Remark",
  "number": "79",
  "title": "",
  "body": "For a positive integer  is the number of reduced residues modulo  "
},
{
  "id": "ex-phi",
  "level": "2",
  "url": "sec-FlT.html#ex-phi",
  "type": "Example",
  "number": "80",
  "title": "",
  "body": "    If is prime,      "
},
{
  "id": "thm-euler-FlT",
  "level": "2",
  "url": "sec-FlT.html#thm-euler-FlT",
  "type": "Theorem",
  "number": "81",
  "title": "Euler’s Generalization of Fermat’s Little Theorem.",
  "body": "Euler's Generalization of   Let with If then    "
},
{
  "id": "FlT",
  "level": "2",
  "url": "sec-FlT.html#FlT",
  "type": "Corollary",
  "number": "82",
  "title": "Fermat’s Little Theorem.",
  "body": "Fermat's Little Theorem   Let be prime and If then     Let be prime and then if and only if Since     "
},
{
  "id": "sec-FlT-5-13",
  "level": "2",
  "url": "sec-FlT.html#sec-FlT-5-13",
  "type": "Warning",
  "number": "83",
  "title": "",
  "body": " The converse of both of these theorems is false. The easiest example is for all positive integers . Also note that . Since there exists an integer such that Thus However,   "
},
{
  "id": "sec-FlT-5-14",
  "level": "2",
  "url": "sec-FlT.html#sec-FlT-5-14",
  "type": "Proof",
  "number": "6.3.3.2",
  "title": "Proof ofEuler’s Generalization of Fermat’s Little Theorem.",
  "body": "Proof of  Let be a positive integer and let be a reduced residue system modulo If with then is a reduced residue system modulo by . Thus, for all then for some Thus   Since there exists such that Thus,   "
},
{
  "id": "sec-modReduce",
  "level": "1",
  "url": "sec-modReduce.html",
  "type": "Section",
  "number": "7.1",
  "title": "Monday, February 26: Modular arithmetic calculations",
  "body": "Monday, February 26: Modular arithmetic calculations    Use Wilson's Theorem to find the least nonnegative residue modulo a prime  Use Fermat's Little Theorem to find the least nonnegative residue modulo a prime    Multiplicative inverses using Wilson's Theorem First, some important algebra for multiplicative inverses     Let be an odd positive integer. Then So is the multiplicative inverse of modulo .   Why is ?   Any common divisor of and also divides by linear combination.    We also have that and so is the multiplicative inverse of modulo Another way to see this is    Let and be positive integers such that Then there exists such that by definition . Then   Let and be positive integers such that Then there exists such that by definition . Then         Practice with Wilson's Theorem: Find  Then Therefore,   Let be an odd prime then .   Let be an odd prime, then by Wilson's Theorem. Multiplying both sides of the congruence by gives Since by the definition of factorial, is the multiplicative inverse of modulo Thus,         Finding least nonnegative residue Fermat's Little Theorem     Find the least nonnegative residue of modulo .  First, note that and Thus, From here, we have two options:  Keep reducing: For this problem, this is the easier method:   Find inverse: Note that so is the multiplicative inverse of Since       Find the least nonnegative residue of modulo .  First, note that and Thus, Then       Corollary 2.14   Let be a prime. If with then is the multiplicative inverse of modulo .      Prove: Let be a prime. If with and then is the multiplicative inverse of modulo .    Let be a prime. If with then by Fermat's Little Theorem, If with then Thus,      Find all incongruent solutions to .   Since there is only one incongruent solution modulo By , is the multiplicative inverse of modulo . Thus,     Since there is only one incongruent solution modulo Since is the multiplicative inverse of modulo by , Since is the multiplicative inverse of modulo so Thus,      Let be prime and with and Then if and only if .   Let be prime and with and  ( ) If then by repeated applications of Proposition 2.4.  ( ) If then by Fermat's Little Theorem,     This statement is only true for primes. Since implies and implies      "
},
{
  "id": "sec-modReduce-2",
  "level": "2",
  "url": "sec-modReduce.html#sec-modReduce-2",
  "type": "Objectives",
  "number": "7.1",
  "title": "",
  "body": "  Use Wilson's Theorem to find the least nonnegative residue modulo a prime  Use Fermat's Little Theorem to find the least nonnegative residue modulo a prime   "
},
{
  "id": "sec-modReduce-3-2",
  "level": "2",
  "url": "sec-modReduce.html#sec-modReduce-3-2",
  "type": "Example",
  "number": "84",
  "title": "",
  "body": "    Let be an odd positive integer. Then So is the multiplicative inverse of modulo .   Why is ?   Any common divisor of and also divides by linear combination.    We also have that and so is the multiplicative inverse of modulo Another way to see this is    Let and be positive integers such that Then there exists such that by definition . Then   Let and be positive integers such that Then there exists such that by definition . Then     "
},
{
  "id": "sec-modReduce-3-3",
  "level": "2",
  "url": "sec-modReduce.html#sec-modReduce-3-3",
  "type": "Example",
  "number": "85",
  "title": "",
  "body": "   Practice with Wilson's Theorem: Find  Then Therefore,   Let be an odd prime then .   Let be an odd prime, then by Wilson's Theorem. Multiplying both sides of the congruence by gives Since by the definition of factorial, is the multiplicative inverse of modulo Thus,       "
},
{
  "id": "sec-modReduce-4-2",
  "level": "2",
  "url": "sec-modReduce.html#sec-modReduce-4-2",
  "type": "Example",
  "number": "86",
  "title": "",
  "body": "   Find the least nonnegative residue of modulo .  First, note that and Thus, From here, we have two options:  Keep reducing: For this problem, this is the easier method:   Find inverse: Note that so is the multiplicative inverse of Since       Find the least nonnegative residue of modulo .  First, note that and Thus, Then      "
},
{
  "id": "cor-inv-fermat",
  "level": "2",
  "url": "sec-modReduce.html#cor-inv-fermat",
  "type": "Corollary",
  "number": "87",
  "title": "Corollary 2.14.",
  "body": "Corollary 2.14   Let be a prime. If with then is the multiplicative inverse of modulo .   "
},
{
  "id": "br-inv-fermat",
  "level": "2",
  "url": "sec-modReduce.html#br-inv-fermat",
  "type": "In Class Activity",
  "number": "12",
  "title": "",
  "body": "  Prove: Let be a prime. If with and then is the multiplicative inverse of modulo .    Let be a prime. If with then by Fermat's Little Theorem, If with then Thus,    "
},
{
  "id": "sec-modReduce-4-5",
  "level": "2",
  "url": "sec-modReduce.html#sec-modReduce-4-5",
  "type": "Example",
  "number": "88",
  "title": "",
  "body": " Find all incongruent solutions to .   Since there is only one incongruent solution modulo By , is the multiplicative inverse of modulo . Thus,     Since there is only one incongruent solution modulo Since is the multiplicative inverse of modulo by , Since is the multiplicative inverse of modulo so Thus,    "
},
{
  "id": "sec-modReduce-4-6",
  "level": "2",
  "url": "sec-modReduce.html#sec-modReduce-4-6",
  "type": "Example",
  "number": "89",
  "title": "",
  "body": " Let be prime and with and Then if and only if .   Let be prime and with and  ( ) If then by repeated applications of Proposition 2.4.  ( ) If then by Fermat's Little Theorem,     This statement is only true for primes. Since implies and implies    "
},
{
  "id": "sec-phiIntro",
  "level": "1",
  "url": "sec-phiIntro.html",
  "type": "Section",
  "number": "7.2",
  "title": "Wednesday, February 28: Modular arithmetic calculations and the <span class=\"process-math\">\\(\\phi-\\)<\/span> function",
  "body": "Wednesday, February 28: Modular arithmetic calculations and the function    Use Euler's Theorem to find the least nonnegative residue modulo a composite  Use Euler's Theorem to find the multiplicative inverse of an integer modulo  Prove using an outline that mirrors the proof that when    Multiplicative inverses using Euler's Extension of Fermat's Little Theorem (30 min)     Find the least nonnegative residue of modulo .  The integers are relatively prime to Thus Also note that and so     Find the least nonnegative residue of modulo .  The integers are relatively prime to Thus Also note that and so Since  is the multiplicative inverse of modulo   Using the Euclidean algorithm, Thus, and        Corollary 2.19   Let with If then is the multiplicative inverse of modulo .     Find all incongruent solutions to .   The only positive integers less than that are not relatively prime to are . Thus,   Since there is only one incongruent solution modulo By , is the multiplicative inverse of modulo . Thus,   Alternately, is the multiplicative inverse of modulo so     The previous example does not ask for the least nonnegative residue, but let's find it anyway.   Find the least nonnegative residue of modulo .   First, note that . From here there are two options:  Factor :  By , and by , is the multiplicative inverse of moddulo Since  Thus,   Using :  Since by , is the multiplicative inverse of modulo Since we have Thus,        Let be distinct primes. Prove that    Let be distinct primes. Then and by Fermat's Little Theorem, and and by definition .  Thus, and by addition.   Thus, and by definition . Since  Thus,      The Euler -function (20 min)  We will also find a formula for in general. The following exercise will outline the general proof:   Let us prove that . First, note that and so .  A number is relatively prime to if and only if is relatively prime to and .  We can partition the positive integers less than or equal to into  For any in the range , define to be the number of integers in the range such that and . Thus, and   We can see that when , and when , .  Note that . Why? All of the positive integers less than or equal to is in exactly one of the congruence classes above. The count how many integers in each congruence class are relatively prime to . If we add them up, we have counted all positive integers less than or equal to .   We have seen that , that when , , and that when , . Thus, we can say that . To finish the \"proof\" we show that there are integers where .  There are congruence classes modulo . Of these, have elements that are relatively prime to . Thus, .      "
},
{
  "id": "sec-phiIntro-2",
  "level": "2",
  "url": "sec-phiIntro.html#sec-phiIntro-2",
  "type": "Objectives",
  "number": "7.2",
  "title": "",
  "body": "  Use Euler's Theorem to find the least nonnegative residue modulo a composite  Use Euler's Theorem to find the multiplicative inverse of an integer modulo  Prove using an outline that mirrors the proof that when   "
},
{
  "id": "ex-euler-solve-cong",
  "level": "2",
  "url": "sec-phiIntro.html#ex-euler-solve-cong",
  "type": "Example",
  "number": "91",
  "title": "",
  "body": "   Find the least nonnegative residue of modulo .  The integers are relatively prime to Thus Also note that and so     Find the least nonnegative residue of modulo .  The integers are relatively prime to Thus Also note that and so Since  is the multiplicative inverse of modulo   Using the Euclidean algorithm, Thus, and       "
},
{
  "id": "cor-inv-euler",
  "level": "2",
  "url": "sec-phiIntro.html#cor-inv-euler",
  "type": "Corollary",
  "number": "92",
  "title": "Corollary 2.19.",
  "body": "Corollary 2.19   Let with If then is the multiplicative inverse of modulo .   "
},
{
  "id": "sec-phiIntro-3-4",
  "level": "2",
  "url": "sec-phiIntro.html#sec-phiIntro-3-4",
  "type": "Example",
  "number": "93",
  "title": "",
  "body": " Find all incongruent solutions to .   The only positive integers less than that are not relatively prime to are . Thus,   Since there is only one incongruent solution modulo By , is the multiplicative inverse of modulo . Thus,   Alternately, is the multiplicative inverse of modulo so    "
},
{
  "id": "sec-phiIntro-3-6",
  "level": "2",
  "url": "sec-phiIntro.html#sec-phiIntro-3-6",
  "type": "Example",
  "number": "94",
  "title": "",
  "body": " Find the least nonnegative residue of modulo .   First, note that . From here there are two options:  Factor :  By , and by , is the multiplicative inverse of moddulo Since  Thus,   Using :  Since by , is the multiplicative inverse of modulo Since we have Thus,      "
},
{
  "id": "br-modpq",
  "level": "2",
  "url": "sec-phiIntro.html#br-modpq",
  "type": "In Class Activity",
  "number": "13",
  "title": "",
  "body": " Let be distinct primes. Prove that    Let be distinct primes. Then and by Fermat's Little Theorem, and and by definition .  Thus, and by addition.   Thus, and by definition . Since  Thus,    "
},
{
  "id": "br-multiplicative-proof",
  "level": "2",
  "url": "sec-phiIntro.html#br-multiplicative-proof",
  "type": "In Class Activity",
  "number": "14",
  "title": "",
  "body": " Let us prove that . First, note that and so .  A number is relatively prime to if and only if is relatively prime to and .  We can partition the positive integers less than or equal to into  For any in the range , define to be the number of integers in the range such that and . Thus, and   We can see that when , and when , .  Note that . Why? All of the positive integers less than or equal to is in exactly one of the congruence classes above. The count how many integers in each congruence class are relatively prime to . If we add them up, we have counted all positive integers less than or equal to .   We have seen that , that when , , and that when , . Thus, we can say that . To finish the \"proof\" we show that there are integers where .  There are congruence classes modulo . Of these, have elements that are relatively prime to . Thus, .    "
},
{
  "id": "sec-phiFacts",
  "level": "1",
  "url": "sec-phiFacts.html",
  "type": "Section",
  "number": "7.3",
  "title": "Friday, March 1: The <span class=\"process-math\">\\(\\phi-\\)<\/span> function and a preview of primitive roots",
  "body": "Friday, March 1: The function and a preview of primitive roots    Prove that when    Quiz (10 min)   Euler -function (20 min)  We will use as an outline to prove  Theorem 3.2   Let and be positive integers where . Then     First, we note that an integer is relatively prime to if and only if it is relatively prime to and since and (together) have the same prime divisors as .  We can partition the positive integers less than or equal to into                                       For any in the range , define to be the number of integers in the range such that and . For each equivalence class  by linear combination. Thus, if If , the arithmetic progression, contains elements. By , the arithmetic progression is a modulo so elements are relatively prime to and thus   Thus, can see that when , and when , .  Since all of the positive integers less than or equal to is in exactly one of the congruence classes above and t he count how many integers in each congruence class are relatively prime to ,   Since of the and the rest are 0,      "
},
{
  "id": "sec-phiFacts-2",
  "level": "2",
  "url": "sec-phiFacts.html#sec-phiFacts-2",
  "type": "Objectives",
  "number": "7.3",
  "title": "",
  "body": "  Prove that when   "
},
{
  "id": "thm-phi-multiplicative",
  "level": "2",
  "url": "sec-phiFacts.html#thm-phi-multiplicative",
  "type": "Theorem",
  "number": "95",
  "title": "Theorem 3.2.",
  "body": "Theorem 3.2   Let and be positive integers where . Then     First, we note that an integer is relatively prime to if and only if it is relatively prime to and since and (together) have the same prime divisors as .  We can partition the positive integers less than or equal to into                                       For any in the range , define to be the number of integers in the range such that and . For each equivalence class  by linear combination. Thus, if If , the arithmetic progression, contains elements. By , the arithmetic progression is a modulo so elements are relatively prime to and thus   Thus, can see that when , and when , .  Since all of the positive integers less than or equal to is in exactly one of the congruence classes above and t he count how many integers in each congruence class are relatively prime to ,   Since of the and the rest are 0,    "
},
{
  "id": "sec-order",
  "level": "1",
  "url": "sec-order.html",
  "type": "Section",
  "number": "8.1",
  "title": "Monday, March 11: Order of elements modulo <span class=\"process-math\">\\(m\\)<\/span>",
  "body": "Monday, March 11: Order of elements modulo    Define the order of an element modulo  Find the order of an element modulo  Prove basic facts about the order of an element modulo    Review of -function (15 minutes)   From before break, states if for positive integers and , then   Thus,    Chapter 2, Exercise 71   Using and the   Let be an integer not divisible by . Prove that .  Let be an integer that is not divisible by . By the , has a unique solution modulo By ,   Since and  says that Multiplying both sides of the congruence by gives Thus, and by definition . Since  so     Let be an integer divisible by . Prove that . Reviewing the proof of part : only requires the modulus is prime. does require so you cannot use it for this problem, but         Order of modulo (35 minutes)  order of modulo    order of modulo    Let with and Then the order of modulo , denoted , is the smallest positive integer such that      Table of exponents modulo                                                                         There are many patterns in this table that we will talk about in the future, but the first is that  Proposition 5.1   Let with and Then for some positive integer if and only if In particular,     Let with and   ( )  We want to show if for some positive integer then  By the , there exist unique integers such that and Thus, since by definition of order . Since and if must be that otherwise is not the smallest positive integer where   ( )  We want to show if for some positive integer then  If then there exists an integer such that . Thus, by definition of order .       Proposition 5.2   Let with and Then for nonnegative integers if and and only if      Let and Since  if and only if    Let and Without loss of generality, assume that   ( ) Assume that Then by exponent rules, Since there exists a multiplicative inverse of modulo by , say . Multiplying both sides of the congruence by this inverse, we get, By , Thus, by definition .  ( ) Assume that Then by definition . Since  states that Multiplying both sides of the congruence by gives        (Proof of ) Let with and Without loss of generality, assume that for nonnegative integers and   ( ) Assume that Then by exponent rules, Since by assumption, there exists a multiplicative inverse of modulo by , say . Multiplying both sides of the congruence by this inverse, we get, By , Thus, by definition .  ( ) Assume that Then by definition , and states that Multiplying both sides of the congruence by gives       "
},
{
  "id": "sec-order-2",
  "level": "2",
  "url": "sec-order.html#sec-order-2",
  "type": "Objectives",
  "number": "8.1",
  "title": "",
  "body": "  Define the order of an element modulo  Find the order of an element modulo  Prove basic facts about the order of an element modulo   "
},
{
  "id": "sec-order-3-2",
  "level": "2",
  "url": "sec-order.html#sec-order-3-2",
  "type": "Remark",
  "number": "96",
  "title": "",
  "body": " From before break, states if for positive integers and , then   Thus,   "
},
{
  "id": "ex-proof-with-euler-crt",
  "level": "2",
  "url": "sec-order.html#ex-proof-with-euler-crt",
  "type": "Problem",
  "number": "97",
  "title": "Chapter 2, Exercise 71.",
  "body": "Chapter 2, Exercise 71   Using and the   Let be an integer not divisible by . Prove that .  Let be an integer that is not divisible by . By the , has a unique solution modulo By ,   Since and  says that Multiplying both sides of the congruence by gives Thus, and by definition . Since  so     Let be an integer divisible by . Prove that . Reviewing the proof of part : only requires the modulus is prime. does require so you cannot use it for this problem, but       "
},
{
  "id": "defn-order",
  "level": "2",
  "url": "sec-order.html#defn-order",
  "type": "Definition",
  "number": "99",
  "title": "order of <span class=\"process-math\">\\(a\\)<\/span> modulo <span class=\"process-math\">\\(m\\)<\/span>.",
  "body": "order of modulo    order of modulo    Let with and Then the order of modulo , denoted , is the smallest positive integer such that    "
},
{
  "id": "table-exp_mod7",
  "level": "2",
  "url": "sec-order.html#table-exp_mod7",
  "type": "Table",
  "number": "100",
  "title": "Table of exponents modulo <span class=\"process-math\">\\(7\\)<\/span>",
  "body": " Table of exponents modulo                                                                        "
},
{
  "id": "prop-order_divides_phi",
  "level": "2",
  "url": "sec-order.html#prop-order_divides_phi",
  "type": "Proposition",
  "number": "101",
  "title": "Proposition 5.1.",
  "body": "Proposition 5.1   Let with and Then for some positive integer if and only if In particular,     Let with and   ( )  We want to show if for some positive integer then  By the , there exist unique integers such that and Thus, since by definition of order . Since and if must be that otherwise is not the smallest positive integer where   ( )  We want to show if for some positive integer then  If then there exists an integer such that . Thus, by definition of order .      "
},
{
  "id": "prop-exponents_mod_order",
  "level": "2",
  "url": "sec-order.html#prop-exponents_mod_order",
  "type": "Proposition",
  "number": "102",
  "title": "Proposition 5.2.",
  "body": "Proposition 5.2   Let with and Then for nonnegative integers if and and only if    "
},
{
  "id": "sec-order-4-7",
  "level": "2",
  "url": "sec-order.html#sec-order-4-7",
  "type": "Example",
  "number": "103",
  "title": "",
  "body": " Let and Since  if and only if    Let and Without loss of generality, assume that   ( ) Assume that Then by exponent rules, Since there exists a multiplicative inverse of modulo by , say . Multiplying both sides of the congruence by this inverse, we get, By , Thus, by definition .  ( ) Assume that Then by definition . Since  states that Multiplying both sides of the congruence by gives      "
},
{
  "id": "sec-order-4-8",
  "level": "2",
  "url": "sec-order.html#sec-order-4-8",
  "type": "Proof",
  "number": "8.1.2.1",
  "title": "",
  "body": " (Proof of ) Let with and Without loss of generality, assume that for nonnegative integers and   ( ) Assume that Then by exponent rules, Since by assumption, there exists a multiplicative inverse of modulo by , say . Multiplying both sides of the congruence by this inverse, we get, By , Thus, by definition .  ( ) Assume that Then by definition , and states that Multiplying both sides of the congruence by gives     "
},
{
  "id": "sec-primeRootReading",
  "level": "1",
  "url": "sec-primeRootReading.html",
  "type": "Section",
  "number": "8.2",
  "title": "Reading for March 13: Primitive roots modulo <span class=\"process-math\">\\(p\\)<\/span>",
  "body": "Reading for March 13: Primitive roots modulo  The original scan on Moodle is a bit hard to read, especially as some parts are annotated and some parts are covered up--since I have not receieved the book from interlibrary loan to re-scan, I will transcribe (incorporating the annotations\/references to our textbook and examples.)  Definition of primitive root  If is a nonzero element of (ie, ), then tells us that This implies that the order of every element of is at most . At the beginning of this chapter ( ) we saw that We can also say that the element has order   The notation is a more group theory way of writing where referes to the congruence class of modulo See Strayer Chapter 2, Example 4.  Definition 10.3.1   Let be prime and let with Then is said to be a primitive root in or primitive root modulo if     See also to Strayer Chapter 5, Definition 2.  Primitive roots may also be defined for when is composite. (See Paper 3 topics)     Is a primitive root?  Is a primitive root?     Computing powers of and modulo we find   Thus, the order of is so is not a primitive root (in )  We see that the order of is hence, is a primitive root (in )       Determine which elements of are primitive roots.  We have not determined the order of elements modulo so here is a chart:  Table of exponents modulo                                                                                                                                                                 From , we determined the orders of all of the nonzero elements of  Hence, the primitive roots in (ie, the primitive roots modulo ) are and      Find a primitive root in if one exists.   For want of a better strategy, we will check the orders of the elements until we find an element of order 16. From the left column, we see that has order  From the center column, we see that has order  From the right column, we see that the order of equals and we conclude that is a primitive root modulo  We did not actually need to compute all of those powers of to determine that is a primitive root. We know that must be a divisor of by . Once we have computed from to and not yet obtained an answer of we know Since the only divisor of that is greater than is 16 itself, we can then conclude that (This observation is generalized in .)    In , we found is a primitive root of (ie, is a primitive root modulo ) Looking again at the column of powers of from the example, observe that these powers cycle through all of the nonzero elements of That is, every nonzero element is equivalent to raised to some power. This is a general fact about primite roots, which we will now prove.  Proposition 10.3.2   Let be a prime and let be a primitive root. Then every nonzero element of appears exactly once on the list     Let be a prime and let be a primitive root modulo Then every integer where is conguent to exactly one of    First, we show that the elements in the list are distinct. Suppose that with and in the range Since we know that the two powers of are equal if and only if the exponents are congruent modulo by . Hence, But since and are restricted to the range it follows that THus, we have show the elements in list are all distinct.  Note that since each element in the like is a nonzero element modulo There are elements in list , and we have just shown that these elements are distinct. Since there are exactly nonzero residues modulo list must include every nonzero residue modulo    In  is a primitive root. Express each of the following elements as where is in the range       The converse of is also true. More precisely, if and if every nonzero element if can be expressed as a power of then must be a primitive root. (See .)   Existence of primitive roots in a prime modulus  In Example , we asked whether there exists a primitive root in To solve this, we did not have to search very vary. Although and are not primitive roots we found that is a primitive roots. If we looke for primitive roots modulo other primes, we find a similar situation. For example, modulo we find that is a primitive root, and modulo we find that is a primitive toot, In fact, every prime less that has a primitive root that is less than or equal to Every prime less that has a primitive root that is less than or equal to  The main result of this chapter is the , which states that for every prime there exists a primitive root modulo Although this is easy to state, priving it is quite tricky. So tricky, in fact, that the proof given by the great Leonhard Euler was incorrect. It was Lagrange who gave the first correct proof of the .  Primitive Root Theorem   Let be prime. Then there exists a primitive root modulo     To prove the , we must first prove that in there exists an element of order Our first step is to prove that there exists an element of order where is prime and divides . (Numbers of the form where is prime and are called prime powers .)  Lemma 10.3.4   Let be a prime and let be a prime power (where is prime and ). If then there exits an element of order modulo     Before proving this lemma, let's see a quick example.   Suppose that Then which is divisible by the following prime powers: Thus, guarentees that we will find elements of orders and modulo    Proof of  Let be a prime. Let be prime and such that Consider the following equations in    By Proposition 5.8, equation has solutions and equation has solutions. Since there must be at least one that is a solution to and not . That is,      has order     By equation , it follows (using ) that divides Thus, the order of modulo is one of the numbers in the list However, from , it follows (again using ) that does not divide Since the only number in list that does not divide is we conclude that the order of modulo is     Thus, we have found an integer with order modulo   Suppose we want to know whether has primitive root--that is, an element of order  tells us that there is an element of order and element of order (see Example ). It turns out that the product will have order and hence, is the primitive root we seek. This is guarenteed by the following lemma.  Lemma 10.3.5   Let and let be reduced residues (see: ). If and are relatively prime, then     On Homework 6--Strayer Chapter 5, Exercise 5a.    In Example , we used to determine that has orders and By , the product of these elements has order os it is a primitive root. We will use this same argument, which combines and to give a general proof of the .  Proof of  Let be prime.  If then is a primitive root modulo Thus, we may assume  Factor into primes:   By , for each there exists an integer of order modulo Let Applying repeatedly (see ), we find Hence, is a primitive root modulo    We have now proved that always has at least one primitive root, but as we have seen, often has more than one primitive root. It turns out that once we know one primitive root in it is easy to find all primitive roots in The following lemma tells us how to do this.  Lemma 10.3.6   Let be prime, and let be a primitive root modulo Then for any  is a primitive root modulo if and only if     Let be prime, and let be a primitive root modulo  By , Thus, if and only if     Naomi's Numerical Proof Preview:  Let's see whether we can use this llemma to determine how many primitive roots there are modulo Let be a primitive root (modulo ). Then the nonzero elements of are  tells us which of these elements are primitive roots modulo : precisely those in which the exponent is relatively prime to Thus, the primitive roots modulo are We see then that the primitive roots modulo correspond to the exponents and which are the positive integers less than which are relatively prime to The nunber of such integers is exactly In general, we have the following theorem.  Theorem 10.3.7   Let be prime. Then there are exactly primitive roots modulo     Let be a primitive root modulo Then by , we know that the list of reduced residues modulo comprises the elements By , an integers is a primitive root modulo if and only if Thus, the number of primitive roots equals the number of positive integers that are less than and relatively prime to By , definition , this is exactly      Referenced Exercises  Exercise 7 Let be prime and let such that Suppose Prove that is a primitive root modulo   Exercise 11 Prove the following statement, which is the converse of : Let be prime, and let If every nonzero element of is a power of then is a primitive root (modulo ).  Exercise 14 Prove the following generalization of   Let and let be reduced residues modulo . Suppose that for all  and are relatively prime. Then      "
},
{
  "id": "defn-primeRoot-prime",
  "level": "2",
  "url": "sec-primeRootReading.html#defn-primeRoot-prime",
  "type": "Definition",
  "number": "104",
  "title": "Definition 10.3.1.",
  "body": "Definition 10.3.1   Let be prime and let with Then is said to be a primitive root in or primitive root modulo if    "
},
{
  "id": "sec-primeRootReading-3-6",
  "level": "2",
  "url": "sec-primeRootReading.html#sec-primeRootReading-3-6",
  "type": "Remark",
  "number": "105",
  "title": "",
  "body": "Primitive roots may also be defined for when is composite. (See Paper 3 topics) "
},
{
  "id": "ex-prime_roots_7",
  "level": "2",
  "url": "sec-primeRootReading.html#ex-prime_roots_7",
  "type": "Example",
  "number": "106",
  "title": "",
  "body": "   Is a primitive root?  Is a primitive root?     Computing powers of and modulo we find   Thus, the order of is so is not a primitive root (in )  We see that the order of is hence, is a primitive root (in )     "
},
{
  "id": "ex-prime_roots_11",
  "level": "2",
  "url": "sec-primeRootReading.html#ex-prime_roots_11",
  "type": "Example",
  "number": "107",
  "title": "",
  "body": " Determine which elements of are primitive roots.  We have not determined the order of elements modulo so here is a chart:  Table of exponents modulo                                                                                                                                                                 From , we determined the orders of all of the nonzero elements of  Hence, the primitive roots in (ie, the primitive roots modulo ) are and    "
},
{
  "id": "ex-prime_roots_17",
  "level": "2",
  "url": "sec-primeRootReading.html#ex-prime_roots_17",
  "type": "Example",
  "number": "109",
  "title": "",
  "body": " Find a primitive root in if one exists.   For want of a better strategy, we will check the orders of the elements until we find an element of order 16. From the left column, we see that has order  From the center column, we see that has order  From the right column, we see that the order of equals and we conclude that is a primitive root modulo  We did not actually need to compute all of those powers of to determine that is a primitive root. We know that must be a divisor of by . Once we have computed from to and not yet obtained an answer of we know Since the only divisor of that is greater than is 16 itself, we can then conclude that (This observation is generalized in .)   "
},
{
  "id": "read-prop-prime-root-generates",
  "level": "2",
  "url": "sec-primeRootReading.html#read-prop-prime-root-generates",
  "type": "Proposition",
  "number": "110",
  "title": "Proposition 10.3.2.",
  "body": "Proposition 10.3.2   Let be a prime and let be a primitive root. Then every nonzero element of appears exactly once on the list    "
},
{
  "id": "sec-primeRootReading-3-13",
  "level": "2",
  "url": "sec-primeRootReading.html#sec-primeRootReading-3-13",
  "type": "Proof",
  "number": "8.2.1.1",
  "title": "",
  "body": " First, we show that the elements in the list are distinct. Suppose that with and in the range Since we know that the two powers of are equal if and only if the exponents are congruent modulo by . Hence, But since and are restricted to the range it follows that THus, we have show the elements in list are all distinct.  Note that since each element in the like is a nonzero element modulo There are elements in list , and we have just shown that these elements are distinct. Since there are exactly nonzero residues modulo list must include every nonzero residue modulo   "
},
{
  "id": "sec-primeRootReading-3-14",
  "level": "2",
  "url": "sec-primeRootReading.html#sec-primeRootReading-3-14",
  "type": "Question",
  "number": "111",
  "title": "",
  "body": "In  is a primitive root. Express each of the following elements as where is in the range      "
},
{
  "id": "thm-prime-roots",
  "level": "2",
  "url": "sec-primeRootReading.html#thm-prime-roots",
  "type": "Theorem",
  "number": "112",
  "title": "Primitive Root Theorem.",
  "body": "Primitive Root Theorem   Let be prime. Then there exists a primitive root modulo    "
},
{
  "id": "read-lem-prime-power-order",
  "level": "2",
  "url": "sec-primeRootReading.html#read-lem-prime-power-order",
  "type": "Lemma",
  "number": "113",
  "title": "Lemma 10.3.4.",
  "body": "Lemma 10.3.4   Let be a prime and let be a prime power (where is prime and ). If then there exits an element of order modulo    "
},
{
  "id": "ex-orders_101",
  "level": "2",
  "url": "sec-primeRootReading.html#ex-orders_101",
  "type": "Example",
  "number": "114",
  "title": "",
  "body": " Suppose that Then which is divisible by the following prime powers: Thus, guarentees that we will find elements of orders and modulo   "
},
{
  "id": "sec-primeRootReading-4-9",
  "level": "2",
  "url": "sec-primeRootReading.html#sec-primeRootReading-4-9",
  "type": "Proof",
  "number": "8.2.2.1",
  "title": "Proof of  Lemma 10.3.4.",
  "body": "Proof of  Let be a prime. Let be prime and such that Consider the following equations in    By Proposition 5.8, equation has solutions and equation has solutions. Since there must be at least one that is a solution to and not . That is,      has order     By equation , it follows (using ) that divides Thus, the order of modulo is one of the numbers in the list However, from , it follows (again using ) that does not divide Since the only number in list that does not divide is we conclude that the order of modulo is     Thus, we have found an integer with order modulo  "
},
{
  "id": "read-lem-order-multiplicative",
  "level": "2",
  "url": "sec-primeRootReading.html#read-lem-order-multiplicative",
  "type": "Lemma",
  "number": "116",
  "title": "Lemma 10.3.5.",
  "body": "Lemma 10.3.5   Let and let be reduced residues (see: ). If and are relatively prime, then     On Homework 6--Strayer Chapter 5, Exercise 5a.   "
},
{
  "id": "sec-primeRootReading-4-13",
  "level": "2",
  "url": "sec-primeRootReading.html#sec-primeRootReading-4-13",
  "type": "Proof",
  "number": "8.2.2.2",
  "title": "Proof of Primitive Root Theorem.",
  "body": "Proof of  Let be prime.  If then is a primitive root modulo Thus, we may assume  Factor into primes:   By , for each there exists an integer of order modulo Let Applying repeatedly (see ), we find Hence, is a primitive root modulo   "
},
{
  "id": "read-lem-all-prime-roots",
  "level": "2",
  "url": "sec-primeRootReading.html#read-lem-all-prime-roots",
  "type": "Lemma",
  "number": "117",
  "title": "Lemma 10.3.6.",
  "body": "Lemma 10.3.6   Let be prime, and let be a primitive root modulo Then for any  is a primitive root modulo if and only if     Let be prime, and let be a primitive root modulo  By , Thus, if and only if   "
},
{
  "id": "read-thm-number-prime-roots",
  "level": "2",
  "url": "sec-primeRootReading.html#read-thm-number-prime-roots",
  "type": "Theorem",
  "number": "118",
  "title": "Theorem 10.3.7.",
  "body": "Theorem 10.3.7   Let be prime. Then there are exactly primitive roots modulo     Let be a primitive root modulo Then by , we know that the list of reduced residues modulo comprises the elements By , an integers is a primitive root modulo if and only if Thus, the number of primitive roots equals the number of positive integers that are less than and relatively prime to By , definition , this is exactly    "
},
{
  "id": "read-ex7",
  "level": "2",
  "url": "sec-primeRootReading.html#read-ex7",
  "type": "Exercise",
  "number": "119",
  "title": "Exercise 7.",
  "body": "Exercise 7 Let be prime and let such that Suppose Prove that is a primitive root modulo  "
},
{
  "id": "read-ex11",
  "level": "2",
  "url": "sec-primeRootReading.html#read-ex11",
  "type": "Exercise",
  "number": "120",
  "title": "Exercise 11.",
  "body": "Exercise 11 Prove the following statement, which is the converse of : Let be prime, and let If every nonzero element of is a power of then is a primitive root (modulo ). "
},
{
  "id": "sec-primeRootReading-6-4",
  "level": "2",
  "url": "sec-primeRootReading.html#sec-primeRootReading-6-4",
  "type": "Exercise",
  "number": "121",
  "title": "Exercise 14.",
  "body": "Exercise 14 Prove the following generalization of   Let and let be reduced residues modulo . Suppose that for all  and are relatively prime. Then    "
},
{
  "id": "sec-primeRootIntro",
  "level": "1",
  "url": "sec-primeRootIntro.html",
  "type": "Section",
  "number": "8.3",
  "title": "Wednesday, March 13: Primitive roots modulo a prime",
  "body": "Wednesday, March 13: Primitive roots modulo a prime    Define the order of an element modulo  Find the order of an element modulo  Prove basic facts about the order of an element modulo           For each result in the scanned notes, identify the result in our textbook.  If it is a special case of the theorem in the textbook, (ie, the reading only proves the theorem for primes or ), also note this.     Primitive roots and comparing Strayer to the reading  primitive root   Let with and Then is said to be a primitive root modulo if     We saw in the reading that primitive roots always exist modulo a prime. What about composites?     Since and  is a primite root modulo The powers are a reduced residue system modulo  Since and  is a primitive root modulo The powers are a reduced residue system modulo  There are no primitive roots modulo By , Since every odd number squares to modulo  and   Since by , we check: So is a primite root modulo but are there more? We can also use exponent rules and to simplify some calculuations. For example, so if and only if      Thus, and are primitive roots modulo    This gives evidence for the fact the if a primitive root exists modulo there are primitive roots modulo which we know is true modulo primes.   Proposition 5.3   Let be a primitive root modulo Then is a set of reduced residues modulo     This is the general version of , using exponents instead of . Since Strayer's statement of is already stated and proved for composites, and both lists have the same number of elements, the only changes to the proof is replacing with Note when  Proposition 5.4   Let with and If is a positive integer, then      Use only the results through or to prove the primitive root version:    Let with and a primitive root modulo If is a positive integer, then      Let with and a primitive root modulo Then by definition . Let Then there exists positive integers such that and by . Then using the proceding equations and exponent rules, we find since by definition . says that   Since by definition of order , says that Since and we have which simplifies to . Since we can conclude .  Since and both values are positive, we can conclude that Finally, we have     Exercises and other results cited in the reading, also on Homework 6.   Prove the following statement, which is the converse of :  Let be prime, and let If every such that is congruent to a power of modulo then is a primitive root modulo .    Prove the following generalization of     Let and let be reduced residues modulo . Suppose that for all  and are relatively prime. Then       "
},
{
  "id": "sec-primeRootIntro-2",
  "level": "2",
  "url": "sec-primeRootIntro.html#sec-primeRootIntro-2",
  "type": "Objectives",
  "number": "8.3",
  "title": "",
  "body": "  Define the order of an element modulo  Find the order of an element modulo  Prove basic facts about the order of an element modulo   "
},
{
  "id": "rqs-Mar13-1",
  "level": "2",
  "url": "sec-primeRootIntro.html#rqs-Mar13-1",
  "type": "Reading Question",
  "number": "8.3.18.3.1.1",
  "title": "For each result in the scanned notes, identify the result in our textbook..",
  "body": "For each result in the scanned notes, identify the result in our textbook.  If it is a special case of the theorem in the textbook, (ie, the reading only proves the theorem for primes or ), also note this.  "
},
{
  "id": "defn-primeRoot",
  "level": "2",
  "url": "sec-primeRootIntro.html#defn-primeRoot",
  "type": "Definition",
  "number": "123",
  "title": "primitive root.",
  "body": "primitive root   Let with and Then is said to be a primitive root modulo if    "
},
{
  "id": "sec-primeRootIntro-4-4",
  "level": "2",
  "url": "sec-primeRootIntro.html#sec-primeRootIntro-4-4",
  "type": "Example",
  "number": "124",
  "title": "",
  "body": "   Since and  is a primite root modulo The powers are a reduced residue system modulo  Since and  is a primitive root modulo The powers are a reduced residue system modulo  There are no primitive roots modulo By , Since every odd number squares to modulo  and   Since by , we check: So is a primite root modulo but are there more? We can also use exponent rules and to simplify some calculuations. For example, so if and only if      Thus, and are primitive roots modulo    This gives evidence for the fact the if a primitive root exists modulo there are primitive roots modulo which we know is true modulo primes.  "
},
{
  "id": "prop-prime-roots-generate",
  "level": "2",
  "url": "sec-primeRootIntro.html#prop-prime-roots-generate",
  "type": "Proposition",
  "number": "125",
  "title": "Proposition 5.3.",
  "body": "Proposition 5.3   Let be a primitive root modulo Then is a set of reduced residues modulo    "
},
{
  "id": "prop-compare-order",
  "level": "2",
  "url": "sec-primeRootIntro.html#prop-compare-order",
  "type": "Proposition",
  "number": "126",
  "title": "Proposition 5.4.",
  "body": "Proposition 5.4   Let with and If is a positive integer, then    "
},
{
  "id": "sec-primeRootIntro-4-8",
  "level": "2",
  "url": "sec-primeRootIntro.html#sec-primeRootIntro-4-8",
  "type": "In Class Activity",
  "number": "15",
  "title": "",
  "body": " Use only the results through or to prove the primitive root version:    Let with and a primitive root modulo If is a positive integer, then      Let with and a primitive root modulo Then by definition . Let Then there exists positive integers such that and by . Then using the proceding equations and exponent rules, we find since by definition . says that   Since by definition of order , says that Since and we have which simplifies to . Since we can conclude .  Since and both values are positive, we can conclude that Finally, we have    "
},
{
  "id": "sec-primeRootIntro-4-10",
  "level": "2",
  "url": "sec-primeRootIntro.html#sec-primeRootIntro-4-10",
  "type": "In Class Activity",
  "number": "16",
  "title": "",
  "body": " Prove the following statement, which is the converse of :  Let be prime, and let If every such that is congruent to a power of modulo then is a primitive root modulo .  "
},
{
  "id": "sec-primeRootIntro-4-11",
  "level": "2",
  "url": "sec-primeRootIntro.html#sec-primeRootIntro-4-11",
  "type": "In Class Activity",
  "number": "17",
  "title": "",
  "body": " Prove the following generalization of     Let and let be reduced residues modulo . Suppose that for all  and are relatively prime. Then     "
},
{
  "id": "sec-LagrangeThem",
  "level": "1",
  "url": "sec-LagrangeThem.html",
  "type": "Section",
  "number": "8.4",
  "title": "Friday, March 15: Lagrange’s Theorem",
  "body": "Friday, March 15: Lagrange's Theorem    Prove Lagrange's Theorem      Section 5.3    Exercise 10a  Determine the number of incongruent primitive roots modulo   Since is prime, says there are primitive roots modulo    Exercise 11a  Find all incongruent integers having order modulo    From Appendix E, Table 3, is a primitive root modulo By , the elements of order modulo are those where The positive integers less than where are So the elements of order are   The problem does not ask for the least nonnegative residues. However, we can also find those:       Quiz (10 minutes)   Lagrange's Theorem  The goal is to finish proving the with a look at polynomials.  Theorem 5.7 Lagrange   Let be a prime number and let for integers Let be the greatest integer such that then is the degree of modulo Then the congruence has at most incongruent solutions. We call these solutions roots of modulo    Proof from class  We proceed by induction on the degree  First, for degree note that by assumption, so for integers.  Base Case: . Then . Since by assumption, Since is prime, Thus, by , there is a unique solution modulo to  Induction Hypothesis: Assume that for all if has degree modulo then has at most incongruent solutions.  We will proceed by contradiction. That is, assume that there exists with degree modulo and at least roots modulo Call these roots Consider the polynomial Then and have the same leading term modulo The polynomial is either the polynomial or it has degree less than modulo  If is the polynomial, then and implies That is, Since is prime, repeated applications of Homework 4, Problem 9a gives that one of is modulo Now, by assumption, and the are distinct modulo so we have a contradiction. Thus, is not the polynomial.  Since are roots of both and they are also roots of This contradicts the induction hypothesis, since has degree less than by construction.  Thus, has at most incongruent solution modulo   Modified proof from Strayer  We proceed by induction on the degree  First, for degree note that by assumption, so for integers.  Base Case: . Then . Since by assumption, Since is prime, Thus, by , there is a unique solution modulo to  Induction Hypothesis: Assume that for all if has degree modulo then has at most incongruent solutions.  If the congruence has no solutions we are done. Otherwise, assume that there exists at least one solution, say Dividing by gives where is a polynomial of degree modulo Since has at most roots modulo by the induction hypothesis, there are at most incongruent additional roots of modulo . Thus, there are a total of at most incongruent roots modulo    Proposition 5.8   Let be prime and a positive integer where . Then has incongruent solutions modulo    Let be prime and a positive integer where . Then there exists such that Then By , there are incongruent solutions to namely We will show that of these are solutions to and the rest are solutions to  By , there are at most solutions to Thus, there are at least incongruent solutions to Since there are also at least incongruent solutions to by , there are exactly incongruent solutions to and thus    Roots of unity   Let be prime and a positive integer. We call the solutions to the roots of unity modulo      "
},
{
  "id": "sec-LagrangeThem-2",
  "level": "2",
  "url": "sec-LagrangeThem.html#sec-LagrangeThem-2",
  "type": "Objectives",
  "number": "8.4",
  "title": "",
  "body": "  Prove Lagrange's Theorem   "
},
{
  "id": "rqs-Mar15-1",
  "level": "2",
  "url": "sec-LagrangeThem.html#rqs-Mar15-1",
  "type": "Reading Question",
  "number": "8.4.18.4.1.1",
  "title": "Exercise 10a.",
  "body": "Exercise 10a  Determine the number of incongruent primitive roots modulo   Since is prime, says there are primitive roots modulo   "
},
{
  "id": "rqs-Mar15-2",
  "level": "2",
  "url": "sec-LagrangeThem.html#rqs-Mar15-2",
  "type": "Reading Question",
  "number": "8.4.18.4.1.2",
  "title": "Exercise 11a.",
  "body": "Exercise 11a  Find all incongruent integers having order modulo    From Appendix E, Table 3, is a primitive root modulo By , the elements of order modulo are those where The positive integers less than where are So the elements of order are   The problem does not ask for the least nonnegative residues. However, we can also find those:    "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-LagrangeThem.html#thm-lagrange",
  "type": "Theorem",
  "number": "129",
  "title": "Theorem 5.7.",
  "body": "Theorem 5.7 Lagrange   Let be a prime number and let for integers Let be the greatest integer such that then is the degree of modulo Then the congruence has at most incongruent solutions. We call these solutions roots of modulo    Proof from class  We proceed by induction on the degree  First, for degree note that by assumption, so for integers.  Base Case: . Then . Since by assumption, Since is prime, Thus, by , there is a unique solution modulo to  Induction Hypothesis: Assume that for all if has degree modulo then has at most incongruent solutions.  We will proceed by contradiction. That is, assume that there exists with degree modulo and at least roots modulo Call these roots Consider the polynomial Then and have the same leading term modulo The polynomial is either the polynomial or it has degree less than modulo  If is the polynomial, then and implies That is, Since is prime, repeated applications of Homework 4, Problem 9a gives that one of is modulo Now, by assumption, and the are distinct modulo so we have a contradiction. Thus, is not the polynomial.  Since are roots of both and they are also roots of This contradicts the induction hypothesis, since has degree less than by construction.  Thus, has at most incongruent solution modulo   Modified proof from Strayer  We proceed by induction on the degree  First, for degree note that by assumption, so for integers.  Base Case: . Then . Since by assumption, Since is prime, Thus, by , there is a unique solution modulo to  Induction Hypothesis: Assume that for all if has degree modulo then has at most incongruent solutions.  If the congruence has no solutions we are done. Otherwise, assume that there exists at least one solution, say Dividing by gives where is a polynomial of degree modulo Since has at most roots modulo by the induction hypothesis, there are at most incongruent additional roots of modulo . Thus, there are a total of at most incongruent roots modulo   "
},
{
  "id": "prop-roots-unity",
  "level": "2",
  "url": "sec-LagrangeThem.html#prop-roots-unity",
  "type": "Proposition",
  "number": "130",
  "title": "Proposition 5.8.",
  "body": "Proposition 5.8   Let be prime and a positive integer where . Then has incongruent solutions modulo    Let be prime and a positive integer where . Then there exists such that Then By , there are incongruent solutions to namely We will show that of these are solutions to and the rest are solutions to  By , there are at most solutions to Thus, there are at least incongruent solutions to Since there are also at least incongruent solutions to by , there are exactly incongruent solutions to and thus   "
},
{
  "id": "def-root-unity",
  "level": "2",
  "url": "sec-LagrangeThem.html#def-root-unity",
  "type": "Definition",
  "number": "131",
  "title": "Roots of unity.",
  "body": "Roots of unity   Let be prime and a positive integer. We call the solutions to the roots of unity modulo    "
},
{
  "id": "ch-week9-2",
  "level": "1",
  "url": "ch-week9-2.html",
  "type": "Section",
  "number": "9.1",
  "title": "Monday, March 18: Proof of Primitive Root Theorem",
  "body": "Monday, March 18: Proof of    Find the number of roots of unity modulo  Prove primitive roots exist modulo a prime    Roots of unity (25 minutes)  Finish proof of   Let be prime, a positive integer, and Prove that if and only if    Let be prime, a positive integer, and Let . If then for all positive integers . Thus, we are only considering such that Otherwise, by .  By , if and only if . Similarly, if and only if . Thus, is a common divisor of and . Combining and gives is a common divisor of and if and only if . One final application of gives if and only if .     Let be prime and a positive integer. Prove that has exactly incongruent solutions modulo    Let be prime, a positive integer, and By , if and only if . By there are exactly solutions to Thus, there are exactly solutions to     Primitive roots modulo a prime (25 minutes)  We will now prove the existence of primivitive roots modulo a prime combining the two methods from the reading: we will show that when there are incongruent integers of order modulo like Strayer. However, we will prove this using the method from instead of results from Chapter 3.  Theorem 5.9   Let be a prime and let with and Then there are exactly incongruent integers of order modulo     Let be a prime and let with and First we will prove the theorem for modulo where is prime and is a nonnegative integer.  By , there are exactly incongruent solutions to and exactly incongruent solutions to Since all solutions to are solutions to . Thus, there are exactly integers where and Thus, by , and Since is prime, By , so we have shown there are incongruent integers with order modulo .  Now we will prove the general case. Let for distinct primes and positive integers Let be elements of order respectively. Consider and . By Homework 6, Problem 6, has order By , there are exactly solutions to . Thus, are all incongruent solutions to by . By , if and only if Since there are such integers there are in fact incongruent integers with order modulo    Corollary 5.10  Let be prime. There are exactly primitive roots modulo     Prove the following statement, which is the converse of : Let be prime, and let If every such that is congruent to a power of modulo then is a primitive root modulo .    "
},
{
  "id": "ch-week9-2-2",
  "level": "2",
  "url": "ch-week9-2.html#ch-week9-2-2",
  "type": "Objectives",
  "number": "9.1",
  "title": "",
  "body": "  Find the number of roots of unity modulo  Prove primitive roots exist modulo a prime   "
},
{
  "id": "br-condition-root-unity",
  "level": "2",
  "url": "ch-week9-2.html#br-condition-root-unity",
  "type": "In Class Activity",
  "number": "18",
  "title": "",
  "body": " Let be prime, a positive integer, and Prove that if and only if    Let be prime, a positive integer, and Let . If then for all positive integers . Thus, we are only considering such that Otherwise, by .  By , if and only if . Similarly, if and only if . Thus, is a common divisor of and . Combining and gives is a common divisor of and if and only if . One final application of gives if and only if .   "
},
{
  "id": "br-more-roots-unity",
  "level": "2",
  "url": "ch-week9-2.html#br-more-roots-unity",
  "type": "In Class Activity",
  "number": "19",
  "title": "",
  "body": " Let be prime and a positive integer. Prove that has exactly incongruent solutions modulo    Let be prime, a positive integer, and By , if and only if . By there are exactly solutions to Thus, there are exactly solutions to   "
},
{
  "id": "thm-number-element-order-d",
  "level": "2",
  "url": "ch-week9-2.html#thm-number-element-order-d",
  "type": "Theorem",
  "number": "132",
  "title": "Theorem 5.9.",
  "body": "Theorem 5.9   Let be a prime and let with and Then there are exactly incongruent integers of order modulo     Let be a prime and let with and First we will prove the theorem for modulo where is prime and is a nonnegative integer.  By , there are exactly incongruent solutions to and exactly incongruent solutions to Since all solutions to are solutions to . Thus, there are exactly integers where and Thus, by , and Since is prime, By , so we have shown there are incongruent integers with order modulo .  Now we will prove the general case. Let for distinct primes and positive integers Let be elements of order respectively. Consider and . By Homework 6, Problem 6, has order By , there are exactly solutions to . Thus, are all incongruent solutions to by . By , if and only if Since there are such integers there are in fact incongruent integers with order modulo   "
},
{
  "id": "cor-number-prime-roots",
  "level": "2",
  "url": "ch-week9-2.html#cor-number-prime-roots",
  "type": "Corollary",
  "number": "133",
  "title": "Corollary 5.10.",
  "body": "Corollary 5.10  Let be prime. There are exactly primitive roots modulo   "
},
{
  "id": "ch-week9-2-4-5",
  "level": "2",
  "url": "ch-week9-2.html#ch-week9-2-4-5",
  "type": "In Class Activity",
  "number": "20",
  "title": "",
  "body": " Prove the following statement, which is the converse of : Let be prime, and let If every such that is congruent to a power of modulo then is a primitive root modulo .  "
},
{
  "id": "sec-quadResIntro",
  "level": "1",
  "url": "sec-quadResIntro.html",
  "type": "Section",
  "number": "9.2",
  "title": "Wednesday, March 20: Introduction to quadratic residues",
  "body": "Wednesday, March 20: Introduction to quadratic residues    Define a quadratic residue modulo  Prove that the quadratic congruence has zero or one solution modulo a prime when  Use the solution to a quadratic congruence modulo a prime to find the other solution     Strayer Section 4.1   Exercise 3  Find all incongruent solutions of the quadratic congruence Is it not true that quadratic congruences have either no solutions or exactly two incongruent solutions? Explain.   As we have seen on many previous questions, for all odd numbers. So there are incongruent solutions modulo , which is not a contradiction because is not an odd prime number.     Finish proof of the existence of primitive roots modulo a prime (10 minutes)   Quadratic residues (40 minutes)  quadratic residue  Let with and The is said to be a quadratic residue modulo if the quadratic congruence is solvable in Otherwise, is said to be a quadratic nonresidue modulo .     When finding squares modulo we only need to check up to since and      Find all incongruent quadratic residues and nonresidues modulo and .    I also included solutions modulo    Modulus  least nonnegative reduced residues  quadratic residues  quadratic nonresidues       N\/A                                                                   Generalized Porism 4.2   Let with and If the quadratic congruence is solvable, say with then is also a solution. If then and solutions occur in pairs.    Let with and If the quadratic congruence is solvable, say with Then   If then and by definition. Since it must be that since Thus, so Therefore, when then and solutions occur in pairs.      Since implies we can say that if is solvable and is not a solution, then solutions occur in pairs.    Proposition 4.1   Let be an odd prime number and let with Then the quadratic congruence has either no solutions or exactly two incongruent solutions modulo .    Let be an odd prime number and let with Consider the quadratic congruence If no solutions exist, we are done.  If solutions to the quadratic congruence exist, then says that there are at least two solutions, since  says that there are at most two solutions to and therefore Thus, there are exactly two incongruent solutions modulo    Proposition 4.3   Let be an odd prime number. Then there are exactly incongruent quadratic residues modulo and exactly incongruent quadratic nonresidues modulo    Consider the quadratic congruences Since each congruence has either zero or two incongruent solutions modulo by , and no integer is a solution to more than one of the congruences, exactly half are solvable. Therefore, there are exactly incongruent quadratic residues modulo and exactly incongruent quadratic nonresidues modulo     "
},
{
  "id": "sec-quadResIntro-2",
  "level": "2",
  "url": "sec-quadResIntro.html#sec-quadResIntro-2",
  "type": "Objectives",
  "number": "9.2",
  "title": "",
  "body": "  Define a quadratic residue modulo  Prove that the quadratic congruence has zero or one solution modulo a prime when  Use the solution to a quadratic congruence modulo a prime to find the other solution   "
},
{
  "id": "rqs-mar20-1",
  "level": "2",
  "url": "sec-quadResIntro.html#rqs-mar20-1",
  "type": "Reading Question",
  "number": "9.2.19.2.1.1",
  "title": "Exercise 3.",
  "body": "Exercise 3  Find all incongruent solutions of the quadratic congruence Is it not true that quadratic congruences have either no solutions or exactly two incongruent solutions? Explain.   As we have seen on many previous questions, for all odd numbers. So there are incongruent solutions modulo , which is not a contradiction because is not an odd prime number.  "
},
{
  "id": "def-quad-residue",
  "level": "2",
  "url": "sec-quadResIntro.html#def-quad-residue",
  "type": "Definition",
  "number": "134",
  "title": "quadratic residue.",
  "body": "quadratic residue  Let with and The is said to be a quadratic residue modulo if the quadratic congruence is solvable in Otherwise, is said to be a quadratic nonresidue modulo .  "
},
{
  "id": "sec-quadResIntro-5-3",
  "level": "2",
  "url": "sec-quadResIntro.html#sec-quadResIntro-5-3",
  "type": "Remark",
  "number": "135",
  "title": "",
  "body": "  When finding squares modulo we only need to check up to since and   "
},
{
  "id": "sec-quadResIntro-5-4",
  "level": "2",
  "url": "sec-quadResIntro.html#sec-quadResIntro-5-4",
  "type": "In Class Activity",
  "number": "21",
  "title": "",
  "body": "  Find all incongruent quadratic residues and nonresidues modulo and .    I also included solutions modulo    Modulus  least nonnegative reduced residues  quadratic residues  quadratic nonresidues       N\/A                                                                  "
},
{
  "id": "lem-roots-pairs",
  "level": "2",
  "url": "sec-quadResIntro.html#lem-roots-pairs",
  "type": "Lemma",
  "number": "136",
  "title": "Generalized Porism 4.2.",
  "body": "Generalized Porism 4.2   Let with and If the quadratic congruence is solvable, say with then is also a solution. If then and solutions occur in pairs.    Let with and If the quadratic congruence is solvable, say with Then   If then and by definition. Since it must be that since Thus, so Therefore, when then and solutions occur in pairs.   "
},
{
  "id": "sec-quadResIntro-5-6",
  "level": "2",
  "url": "sec-quadResIntro.html#sec-quadResIntro-5-6",
  "type": "Remark",
  "number": "137",
  "title": "",
  "body": "  Since implies we can say that if is solvable and is not a solution, then solutions occur in pairs.   "
},
{
  "id": "prop-number-sqrts",
  "level": "2",
  "url": "sec-quadResIntro.html#prop-number-sqrts",
  "type": "Proposition",
  "number": "138",
  "title": "Proposition 4.1.",
  "body": "Proposition 4.1   Let be an odd prime number and let with Then the quadratic congruence has either no solutions or exactly two incongruent solutions modulo .    Let be an odd prime number and let with Consider the quadratic congruence If no solutions exist, we are done.  If solutions to the quadratic congruence exist, then says that there are at least two solutions, since  says that there are at most two solutions to and therefore Thus, there are exactly two incongruent solutions modulo   "
},
{
  "id": "prop-number-quad-residues",
  "level": "2",
  "url": "sec-quadResIntro.html#prop-number-quad-residues",
  "type": "Proposition",
  "number": "139",
  "title": "Proposition 4.3.",
  "body": "Proposition 4.3   Let be an odd prime number. Then there are exactly incongruent quadratic residues modulo and exactly incongruent quadratic nonresidues modulo    Consider the quadratic congruences Since each congruence has either zero or two incongruent solutions modulo by , and no integer is a solution to more than one of the congruences, exactly half are solvable. Therefore, there are exactly incongruent quadratic residues modulo and exactly incongruent quadratic nonresidues modulo   "
},
{
  "id": "sec-LegendreSym",
  "level": "1",
  "url": "sec-LegendreSym.html",
  "type": "Section",
  "number": "9.3",
  "title": "Friday, March 22: Legendre symbol",
  "body": "Friday, March 22: Legendre symbol    Define the Legendre symbol  Prove basic facts about the Legendre symbol  Use the definition and basic facts to find the Legendre symbol for specific examples      Strayer Section 4.2 through Example 4    Exercise 12    By Euler's Criterion. Then       By Euler's Criterion. Then        Quiz (15 minutes) Technical difficults with printer and projector.  Legendre symbol (35 minutes)     Legendre symbol of modulo    Let be an odd prime number and let with . The Legendre symbol , denoted , is     Euler's Criterion   Let be an odd prime and with Then    We will not prove this today, but we will use it to go over the solution to the reading assignment and to prove the following proposition. Proposition 4.5   Let be an odd prime number and with and Then   If then         Let be an odd prime number and with and Then is a quadratic residue modulo by definition, so by the definition of the Legendre symbol.  If then either both and are quadratic residues modulo or both and are quadratic nonresidues modulo Thus  For the last part, gives      "
},
{
  "id": "sec-LegendreSym-2",
  "level": "2",
  "url": "sec-LegendreSym.html#sec-LegendreSym-2",
  "type": "Objectives",
  "number": "9.3",
  "title": "",
  "body": "  Define the Legendre symbol  Prove basic facts about the Legendre symbol  Use the definition and basic facts to find the Legendre symbol for specific examples   "
},
{
  "id": "rqs-Mar22-1",
  "level": "2",
  "url": "sec-LegendreSym.html#rqs-Mar22-1",
  "type": "Reading Question",
  "number": "9.3.19.3.1.1",
  "title": "Exercise 12.",
  "body": "Exercise 12    By Euler's Criterion. Then       By Euler's Criterion. Then     "
},
{
  "id": "defn-legendre",
  "level": "2",
  "url": "sec-LegendreSym.html#defn-legendre",
  "type": "Definition",
  "number": "140",
  "title": "",
  "body": "   Legendre symbol of modulo    Let be an odd prime number and let with . The Legendre symbol , denoted , is    "
},
{
  "id": "thm-euler-quads",
  "level": "2",
  "url": "sec-LegendreSym.html#thm-euler-quads",
  "type": "Theorem",
  "number": "141",
  "title": "Euler’s Criterion.",
  "body": "Euler's Criterion   Let be an odd prime and with Then    "
},
{
  "id": "prop-legendre-facts",
  "level": "2",
  "url": "sec-LegendreSym.html#prop-legendre-facts",
  "type": "Proposition",
  "number": "142",
  "title": "Proposition 4.5.",
  "body": "Proposition 4.5   Let be an odd prime number and with and Then   If then         Let be an odd prime number and with and Then is a quadratic residue modulo by definition, so by the definition of the Legendre symbol.  If then either both and are quadratic residues modulo or both and are quadratic nonresidues modulo Thus  For the last part, gives    "
},
{
  "id": "sec-EulerCriterion",
  "level": "1",
  "url": "sec-EulerCriterion.html",
  "type": "Section",
  "number": "10.1",
  "title": "Monday, March 25: Quadratic residue of <span class=\"process-math\">\\(-1\\)<\/span>",
  "body": "Monday, March 25: Quadratic residue of    Prove  Classify when is a quadratic residue modulo an odd prime    Proof of Euler's Criterion We will prove .  Proof of  Let be an odd prime and with If there exists such that then by definition . Note that by . Thus  If is a quadratic nonresidue modulo consider the reduced residue system  For each element of the list, there exists a unique element , also on the list, such that by Theorem 2.6 since . Since is a quadratic nonresidue by assumption, Thus, there are pairs where Thus, by . Since is a quadratic nonresidue modulo    Some sources define when In this case, Let be an odd prime and . If then    When is a quadratic residue?  Theorem 4.6   Let be an odd prime number. Then     Let be an odd prime number. Then from , Since both values are we can say  If then there exists such that Thus, and   If then there exists such that Thus, and      "
},
{
  "id": "sec-EulerCriterion-2",
  "level": "2",
  "url": "sec-EulerCriterion.html#sec-EulerCriterion-2",
  "type": "Objectives",
  "number": "10.1",
  "title": "",
  "body": "  Prove  Classify when is a quadratic residue modulo an odd prime   "
},
{
  "id": "sec-EulerCriterion-3-3",
  "level": "2",
  "url": "sec-EulerCriterion.html#sec-EulerCriterion-3-3",
  "type": "Proof",
  "number": "10.1.1.1",
  "title": "Proof of Euler’s Criterion.",
  "body": "Proof of  Let be an odd prime and with If there exists such that then by definition . Note that by . Thus  If is a quadratic nonresidue modulo consider the reduced residue system  For each element of the list, there exists a unique element , also on the list, such that by Theorem 2.6 since . Since is a quadratic nonresidue by assumption, Thus, there are pairs where Thus, by . Since is a quadratic nonresidue modulo   "
},
{
  "id": "sec-EulerCriterion-3-4",
  "level": "2",
  "url": "sec-EulerCriterion.html#sec-EulerCriterion-3-4",
  "type": "Remark",
  "number": "143",
  "title": "",
  "body": "Some sources define when In this case, Let be an odd prime and . If then  "
},
{
  "id": "thm-residue-neg1",
  "level": "2",
  "url": "sec-EulerCriterion.html#thm-residue-neg1",
  "type": "Theorem",
  "number": "144",
  "title": "Theorem 4.6.",
  "body": "Theorem 4.6   Let be an odd prime number. Then     Let be an odd prime number. Then from , Since both values are we can say  If then there exists such that Thus, and   If then there exists such that Thus, and    "
},
{
  "id": "sec-quadRecIntro",
  "level": "1",
  "url": "sec-quadRecIntro.html",
  "type": "Section",
  "number": "10.2",
  "title": "Wednesday, March 27: Introduction to quadratic reciprocity",
  "body": "Wednesday, March 27: Introduction to quadratic reciprocity    Use quadratic reciprocity to find the Legendre symbol of an integer modulo .  Characterize the primes where are quadratic residues.      Scanned notes, Pommersheim-Marks-Flapan Section 11.2 and part of 11.3.    Use the results from the reading to find  From , Since from , and from  Putting this together, we get from and the fact that is a quadratic nonresidue modulo      Quadratic reciprocity (20 minutes)  Quadratic Reciprocity (first statement)   Let and be distinct primes.  If or then  If then      It will take time to prove the lemmas for quadratic reciprocity, but we can immediately prove some results.  The first is that this initial statement is equivalent to the more standard statement. This is our first example where one statement of a result ( ) is more useful in calculations and proofs, but the proof involves proving an equivalent statement ( ).  Law of Quadratic Reciprocity   Let and be distinct primes. Then      We can quickly prove the second equality, If or then one of and is even. Thus If then and are both odd. Thus      is equivalent to That is, implies and implies .    implies .  Let and be distinct primes. Then says that Since and we know that if and only if Thus, when or  Similarly, if and only if Thus, when   The other direction is on next homework assignment.    Notice that we also proved the converse of :    Let and be distinct primes.  If then or  If then       Quadratic reciprocity practice (30 minutes)  Strayer Chapter 4, Exercise 35  Let be an odd prime number. Prove the following statements the following provided outlines, which will help solve the next problem, as well.  if and only if   Since . we need two cases for .  If then by , and if and only if . Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  If then by , and if and only if . Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  Therefore, if and only if    if and only if   From , Again, we have two cases.  If then by and by . Thus, if and only if Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  If then by and by . Thus, if and only if Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  Therefore, if and only if which is equivalent to       Strayer Chapter 4, Exercise 36  Find congruences characterizing all prime numbers for which the following integers are quadratic residues modulo as done in the previous exercise.  Outline is provided for the first part. Outline for second part added after class.    Since  by . Then if and only if .      From , by . Again, we have two cases.  If then by and by . Thus, if and only if When we have and when we have . In each case, there is a unique equivalence class modulo by the Chinese Remainder Theorem.  If then by and by . Thus, if and only if When we have and when we have . In each case, there is a unique equivalence class modulo by the Chinese Remainder Theorem.  Therefore, if and only if          "
},
{
  "id": "sec-quadRecIntro-2",
  "level": "2",
  "url": "sec-quadRecIntro.html#sec-quadRecIntro-2",
  "type": "Objectives",
  "number": "10.2",
  "title": "",
  "body": "  Use quadratic reciprocity to find the Legendre symbol of an integer modulo .  Characterize the primes where are quadratic residues.   "
},
{
  "id": "rqs-Mar27-1",
  "level": "2",
  "url": "sec-quadRecIntro.html#rqs-Mar27-1",
  "type": "Reading Question",
  "number": "10.2.110.2.1.1",
  "title": "<em class=\"emphasis\">Use the results from the reading<\/em> to find <span class=\"process-math\">\\(\\legendre{-3}{71}.\\)<\/span>.",
  "body": "Use the results from the reading to find  From , Since from , and from  Putting this together, we get from and the fact that is a quadratic nonresidue modulo   "
},
{
  "id": "quad-rec-useful-form",
  "level": "2",
  "url": "sec-quadRecIntro.html#quad-rec-useful-form",
  "type": "Theorem",
  "number": "145",
  "title": "Quadratic Reciprocity (first statement).",
  "body": "Quadratic Reciprocity (first statement)   Let and be distinct primes.  If or then  If then     "
},
{
  "id": "quad-rec-standard-form",
  "level": "2",
  "url": "sec-quadRecIntro.html#quad-rec-standard-form",
  "type": "Theorem",
  "number": "146",
  "title": "Law of Quadratic Reciprocity.",
  "body": "Law of Quadratic Reciprocity   Let and be distinct primes. Then    "
},
{
  "id": "sec-quadRecIntro-4-6",
  "level": "2",
  "url": "sec-quadRecIntro.html#sec-quadRecIntro-4-6",
  "type": "Remark",
  "number": "147",
  "title": "",
  "body": " We can quickly prove the second equality, If or then one of and is even. Thus If then and are both odd. Thus  "
},
{
  "id": "prop-equiv-quad-rec",
  "level": "2",
  "url": "sec-quadRecIntro.html#prop-equiv-quad-rec",
  "type": "Proposition",
  "number": "148",
  "title": "",
  "body": "   is equivalent to That is, implies and implies .    implies .  Let and be distinct primes. Then says that Since and we know that if and only if Thus, when or  Similarly, if and only if Thus, when   The other direction is on next homework assignment.   "
},
{
  "id": "cor-quad-rec",
  "level": "2",
  "url": "sec-quadRecIntro.html#cor-quad-rec",
  "type": "Corollary",
  "number": "149",
  "title": "",
  "body": "  Let and be distinct primes.  If then or  If then     "
},
{
  "id": "sec-quadRecIntro-5-2",
  "level": "2",
  "url": "sec-quadRecIntro.html#sec-quadRecIntro-5-2",
  "type": "In Class Activity",
  "number": "22",
  "title": "Strayer Chapter 4, Exercise 35.",
  "body": "Strayer Chapter 4, Exercise 35  Let be an odd prime number. Prove the following statements the following provided outlines, which will help solve the next problem, as well.  if and only if   Since . we need two cases for .  If then by , and if and only if . Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  If then by , and if and only if . Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  Therefore, if and only if    if and only if   From , Again, we have two cases.  If then by and by . Thus, if and only if Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  If then by and by . Thus, if and only if Then and this is the unique equivalence class modulo by the Chinese Remainder Theorem.  Therefore, if and only if which is equivalent to      "
},
{
  "id": "sec-quadRecIntro-5-3",
  "level": "2",
  "url": "sec-quadRecIntro.html#sec-quadRecIntro-5-3",
  "type": "In Class Activity",
  "number": "23",
  "title": "Strayer Chapter 4, Exercise 36.",
  "body": "Strayer Chapter 4, Exercise 36  Find congruences characterizing all prime numbers for which the following integers are quadratic residues modulo as done in the previous exercise.  Outline is provided for the first part. Outline for second part added after class.    Since  by . Then if and only if .      From , by . Again, we have two cases.  If then by and by . Thus, if and only if When we have and when we have . In each case, there is a unique equivalence class modulo by the Chinese Remainder Theorem.  If then by and by . Thus, if and only if When we have and when we have . In each case, there is a unique equivalence class modulo by the Chinese Remainder Theorem.  Therefore, if and only if        "
},
{
  "id": "sec-gaussLemIntro",
  "level": "1",
  "url": "sec-gaussLemIntro.html",
  "type": "Section",
  "number": "11.1",
  "title": "Monday, April 1: Gauss’s Lemma and Practice",
  "body": "Monday, April 1: Gauss's Lemma and Practice    Find the Legendre symbol using   Find the Legendre symbol using several different methods    Statement of Guass's Lemma (20 minutes)  Gauss's Lemma   Let be an odd prime number and like with . Let be the number of least positive residues of the integers modulo that are greater than Then       Find   Using   Note that .  First, we list and find the least nonnegative residues modulo    Now we count of the least nonnegative residues modulo are greater than  Thus,    Factoring and using quadratic reciprocity   Using and the fact that  Since  by and . Thus,           Find   Using   Since we need to find the least nonnegative residues of modulo These are Then is greater than and    By reducing modulo then using   By Theorem 4.5(b)  Since we need to find the least nonnegative residues of modulo These are Then is greater than and    By reducing modulo and using quadratic reciprocity   By Theorem 4.5(b)  Since  By Theorem 4.5(b)  using .         Practice Problems (30 minutes)  We can combine these results to find the Legendre symbol many different ways.   Use the following methods to find :  Euler's Criterion, done  Factoring into . From here, we will explore the various was to find and .  Find   Using .  From ,     Using .  First, find the least nonnegative residues of modulo These are and are greater than Thus, by ,       Find   Using .  From ,     Using quadratic reciprocity   Since     Using .  First, find the least nonnegative residues of modulo These are and are greater than Thus, by ,       Thus,  Use that so Then find using .  Using .  From ,     Using quadratic reciprocity   Since     Using .  First, find the least nonnegative residues of modulo These are and are greater than Thus, by ,           Now we will examine the Legendre symbol of using Gauss's Lemma. First, note that are already least nonnegative residues modulo It will be slightly easier to count how many are less than  then subtract from the total number,  Let with Then if and only if Thus, of are greater than ( Hint: The two blanks should be the same, and also go in the blanks below)  Now complete this table. I added a box around the numbers in the fourth column that are greater than                                                                      "
},
{
  "id": "sec-gaussLemIntro-2",
  "level": "2",
  "url": "sec-gaussLemIntro.html#sec-gaussLemIntro-2",
  "type": "Objectives",
  "number": "11.1",
  "title": "",
  "body": "  Find the Legendre symbol using   Find the Legendre symbol using several different methods   "
},
{
  "id": "lem-gauss",
  "level": "2",
  "url": "sec-gaussLemIntro.html#lem-gauss",
  "type": "Lemma",
  "number": "150",
  "title": "Gauss’s Lemma.",
  "body": "Gauss's Lemma   Let be an odd prime number and like with . Let be the number of least positive residues of the integers modulo that are greater than Then    "
},
{
  "id": "sec-gaussLemIntro-3-3",
  "level": "2",
  "url": "sec-gaussLemIntro.html#sec-gaussLemIntro-3-3",
  "type": "Example",
  "number": "151",
  "title": "",
  "body": "  Find   Using   Note that .  First, we list and find the least nonnegative residues modulo    Now we count of the least nonnegative residues modulo are greater than  Thus,    Factoring and using quadratic reciprocity   Using and the fact that  Since  by and . Thus,        "
},
{
  "id": "sec-gaussLemIntro-3-4",
  "level": "2",
  "url": "sec-gaussLemIntro.html#sec-gaussLemIntro-3-4",
  "type": "Example",
  "number": "152",
  "title": "",
  "body": "  Find   Using   Since we need to find the least nonnegative residues of modulo These are Then is greater than and    By reducing modulo then using   By Theorem 4.5(b)  Since we need to find the least nonnegative residues of modulo These are Then is greater than and    By reducing modulo and using quadratic reciprocity   By Theorem 4.5(b)  Since  By Theorem 4.5(b)  using .       "
},
{
  "id": "sec-gaussLemIntro-4-3",
  "level": "2",
  "url": "sec-gaussLemIntro.html#sec-gaussLemIntro-4-3",
  "type": "In Class Activity",
  "number": "24",
  "title": "",
  "body": " Use the following methods to find :  Euler's Criterion, done  Factoring into . From here, we will explore the various was to find and .  Find   Using .  From ,     Using .  First, find the least nonnegative residues of modulo These are and are greater than Thus, by ,       Find   Using .  From ,     Using quadratic reciprocity   Since     Using .  First, find the least nonnegative residues of modulo These are and are greater than Thus, by ,       Thus,  Use that so Then find using .  Using .  From ,     Using quadratic reciprocity   Since     Using .  First, find the least nonnegative residues of modulo These are and are greater than Thus, by ,         "
},
{
  "id": "sec-gaussLemIntro-4-4",
  "level": "2",
  "url": "sec-gaussLemIntro.html#sec-gaussLemIntro-4-4",
  "type": "In Class Activity",
  "number": "25",
  "title": "",
  "body": " Now we will examine the Legendre symbol of using Gauss's Lemma. First, note that are already least nonnegative residues modulo It will be slightly easier to count how many are less than  then subtract from the total number,  Let with Then if and only if Thus, of are greater than ( Hint: The two blanks should be the same, and also go in the blanks below)  Now complete this table. I added a box around the numbers in the fourth column that are greater than                                                                    "
},
{
  "id": "sec-gaussLem",
  "level": "1",
  "url": "sec-gaussLem.html",
  "type": "Section",
  "number": "11.2",
  "title": "Wednesday, April 3: Proving Gauss’s Lemma and the Quadratic Residue of <span class=\"process-math\">\\(2\\)<\/span>",
  "body": "Wednesday, April 3: Proving Gauss's Lemma and the Quadratic Residue of    Prove  Classify when is a quadratic residue modulo a prime.      The remainder of Strayer Section 4.2. For a different approach, see notes on Moodle.    The case of Strayer Theorem 4.8  Mirroring Strayer's argument for  If then there exists such that Then and Thus,     Proof of Guass's Lemma (30 minutes)    is often stated as:  Let be an odd prime number and like with . Let be the number of least absolute residues of the integers modulo that are negative. Then       Let be an odd prime number and like with Consider The least absolute residues of and differ by a negative sign. In other words,   Furthermore, for each the exactly one of and is a least absolute residue of    Let be an odd prime number and let with Then   Then is a reduced residue system modulo by . From Chapter 2, , is a reduced residue system modulo . Thus, every element of is congruent to exactly one of That is, for each both and are least absolute residue of  If is the least absolute remainder of modulo for some then is the absolute least residue of modulo and Thus, is not an absolute least residue of Since there are elements of there must be distinct absolute least residues modulo Thus, for each exactly on of and is an absolute least residue of      Check for                    We now prove .  Proof of  Let be the least nonnegative residues of the integers that are greater than and be the least nonnegative residues that are less that . Note that no or is since does not divide any of . Consider the integers given by We want to show that these integers are the integers from to inclusive, in some order. Since each integer is less than or equal to , it suffices to show that no two of these integers are congruent modulo .  If for some , then , but this implies that there exists some such that with and Since we know that the multiplicative inverse of modulo exists and thus , a contradiction. Thus, no two of the first integers are congruent modulo .  Similarly, no two of the second integers are congruent. Now, if , for some and , then . Thus, there exists such that with and . Since , we know that the multiplicative inverse of modulo exists, and thus , a contradiction. Thus, the integers are the integers in some order.  Then, implies that   By the definition of and , we have   By reordering, we have   Thus, , and . By Euler's criterion, we get that . Since both sides of the congruence must be we have .   We are going to prove a result about before our next technical lemma.  Theorem 4.8   Let be an odd prime. Then     By Gauss's Lemma, we have that where is the number of least positive residues of the integers that are greater than . Let with . Then if and only if so of the integers that are less than , where is the floor function. So, of these integers are greater than , from which by Gauss's Lemma. For the first equality, it suffices to show that   If , the for some . That gives us and Thus, the theorem holds when . The rest of the cases are part of Homework 8.     "
},
{
  "id": "sec-gaussLem-2",
  "level": "2",
  "url": "sec-gaussLem.html#sec-gaussLem-2",
  "type": "Objectives",
  "number": "11.2",
  "title": "",
  "body": "  Prove  Classify when is a quadratic residue modulo a prime.   "
},
{
  "id": "rqs-Apr3-1",
  "level": "2",
  "url": "sec-gaussLem.html#rqs-Apr3-1",
  "type": "Reading Question",
  "number": "11.2.111.2.1.1",
  "title": "The <span class=\"process-math\">\\(p\\equiv 3\\pmod{9}\\)<\/span> case of Strayer Theorem 4.8.",
  "body": "The case of Strayer Theorem 4.8  Mirroring Strayer's argument for  If then there exists such that Then and Thus,  "
},
{
  "id": "sec-gaussLem-4-2",
  "level": "2",
  "url": "sec-gaussLem.html#sec-gaussLem-4-2",
  "type": "Remark",
  "number": "153",
  "title": "",
  "body": "  is often stated as:  Let be an odd prime number and like with . Let be the number of least absolute residues of the integers modulo that are negative. Then    "
},
{
  "id": "lem-residues-gauss-lem",
  "level": "2",
  "url": "sec-gaussLem.html#lem-residues-gauss-lem",
  "type": "Lemma",
  "number": "154",
  "title": "",
  "body": "  Let be an odd prime number and like with Consider The least absolute residues of and differ by a negative sign. In other words,   Furthermore, for each the exactly one of and is a least absolute residue of    Let be an odd prime number and let with Then   Then is a reduced residue system modulo by . From Chapter 2, , is a reduced residue system modulo . Thus, every element of is congruent to exactly one of That is, for each both and are least absolute residue of  If is the least absolute remainder of modulo for some then is the absolute least residue of modulo and Thus, is not an absolute least residue of Since there are elements of there must be distinct absolute least residues modulo Thus, for each exactly on of and is an absolute least residue of   "
},
{
  "id": "sec-gaussLem-4-4",
  "level": "2",
  "url": "sec-gaussLem.html#sec-gaussLem-4-4",
  "type": "In Class Activity",
  "number": "26",
  "title": "",
  "body": "  Check for                   "
},
{
  "id": "sec-gaussLem-4-6",
  "level": "2",
  "url": "sec-gaussLem.html#sec-gaussLem-4-6",
  "type": "Proof",
  "number": "11.2.2.1",
  "title": "Proof of Lemma 150.",
  "body": "Proof of  Let be the least nonnegative residues of the integers that are greater than and be the least nonnegative residues that are less that . Note that no or is since does not divide any of . Consider the integers given by We want to show that these integers are the integers from to inclusive, in some order. Since each integer is less than or equal to , it suffices to show that no two of these integers are congruent modulo .  If for some , then , but this implies that there exists some such that with and Since we know that the multiplicative inverse of modulo exists and thus , a contradiction. Thus, no two of the first integers are congruent modulo .  Similarly, no two of the second integers are congruent. Now, if , for some and , then . Thus, there exists such that with and . Since , we know that the multiplicative inverse of modulo exists, and thus , a contradiction. Thus, the integers are the integers in some order.  Then, implies that   By the definition of and , we have   By reordering, we have   Thus, , and . By Euler's criterion, we get that . Since both sides of the congruence must be we have .  "
},
{
  "id": "thm-qr-2",
  "level": "2",
  "url": "sec-gaussLem.html#thm-qr-2",
  "type": "Theorem",
  "number": "155",
  "title": "Theorem 4.8.",
  "body": "Theorem 4.8   Let be an odd prime. Then     By Gauss's Lemma, we have that where is the number of least positive residues of the integers that are greater than . Let with . Then if and only if so of the integers that are less than , where is the floor function. So, of these integers are greater than , from which by Gauss's Lemma. For the first equality, it suffices to show that   If , the for some . That gives us and Thus, the theorem holds when . The rest of the cases are part of Homework 8.   "
},
{
  "id": "sec-proveQR",
  "level": "1",
  "url": "sec-proveQR.html",
  "type": "Section",
  "number": "11.3",
  "title": "Friday, April 5: Geometric Lemma for Quadratic reciprocity",
  "body": "Friday, April 5: Geometric Lemma for Quadratic reciprocity    Count lattice point in a rectangle with side lengths and two different ways  Use the two counting methods to prove quadratic reciprocity    Quiz (10 minutes)   Proof of quadratic reciprocity (40 minutes)  We will finally do (most of) the proof of    A lattice point is a point where . We can write this as .    We will use two different methods to count the number of lattice points in the rectangle with vertices other than the axes. The easy method is multiplication: there are lattice points. The other method involves counting the lattice points (in the same rectangle) with call this number and those with call this number Then there are a total of lattice points.  This changes the statement of quadratic reciprocity to     The steps below outline the proof in the general case, when and .  Move the sliders to and   The line segment between the origin and has slope . Since and are distinct primes, there are no lattice points on line segment except the endpoints.  First, we will count the number of points where This triangle is grey in the GeoGebra. We will count how many lattice points on each horizontal lines Let's just check the numbers we should get:  When there are lattice points.  When there are lattice points.  For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle, is  Next we will count the rest of the lattice points in the rectangle, the blue region in the GeoGebra. We willl call this number .  The region is bounded by  and Now, the point where intersects is between two consecutive lattice points, with coordinates and Similarly, the point where intersects is between two consecutive lattice points, with coordinates and Thus, the only lattice point in the triangle and is . Therefore, there are also lattice points in the triangle with vertices  We use the same method as to find We will count how many lattice points on each vertical lines Let's just check the numbers we should get:  When there are lattice points.  When there are lattice points.  When there are lattice points.  For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle is .  Thus, the total number of lattice points is   Now we will use without proof that Lemma 4.10   Let be an odd prime number and let with and odd. If then     Proof of  Let and be distinct odd primes. Then from , where Thus, It remains to show that  Without loss of generality, assume that . We draw the rectangle and , as in the GeoGebra example. Then there are lattice points in this rectangle, excluding the axes.  The line segment between the origin and has slope . Since and are distinct primes, there are no lattice points on line segment except the endpoints.  For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle is . Next we will count the rest of the lattice points in the rectangle, the blue region in the GeoGebra. We willl call this number . The region is bounded by  and Now, the point where intersects is between two consecutive lattice points, with coordinates and Similarly, the point where intersects is between two consecutive lattice points, with coordinates and Thus, the only lattice point in the triangle and is . Therefore, there are also lattice points in the triangle with vertices  We use the same method as to find We will count how many lattice points on each vertical lines For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle is . Thus, the total number of lattice points is    "
},
{
  "id": "sec-proveQR-2",
  "level": "2",
  "url": "sec-proveQR.html#sec-proveQR-2",
  "type": "Objectives",
  "number": "11.3",
  "title": "",
  "body": "  Count lattice point in a rectangle with side lengths and two different ways  Use the two counting methods to prove quadratic reciprocity   "
},
{
  "id": "sec-proveQR-4-3",
  "level": "2",
  "url": "sec-proveQR.html#sec-proveQR-4-3",
  "type": "Definition",
  "number": "156",
  "title": "",
  "body": "  A lattice point is a point where . We can write this as .   "
},
{
  "id": "sec-proveQR-4-7",
  "level": "2",
  "url": "sec-proveQR.html#sec-proveQR-4-7",
  "type": "Example",
  "number": "157",
  "title": "",
  "body": " The steps below outline the proof in the general case, when and .  Move the sliders to and   The line segment between the origin and has slope . Since and are distinct primes, there are no lattice points on line segment except the endpoints.  First, we will count the number of points where This triangle is grey in the GeoGebra. We will count how many lattice points on each horizontal lines Let's just check the numbers we should get:  When there are lattice points.  When there are lattice points.  For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle, is  Next we will count the rest of the lattice points in the rectangle, the blue region in the GeoGebra. We willl call this number .  The region is bounded by  and Now, the point where intersects is between two consecutive lattice points, with coordinates and Similarly, the point where intersects is between two consecutive lattice points, with coordinates and Thus, the only lattice point in the triangle and is . Therefore, there are also lattice points in the triangle with vertices  We use the same method as to find We will count how many lattice points on each vertical lines Let's just check the numbers we should get:  When there are lattice points.  When there are lattice points.  When there are lattice points.  For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle is .  Thus, the total number of lattice points is  "
},
{
  "id": "lem-count-points-qr",
  "level": "2",
  "url": "sec-proveQR.html#lem-count-points-qr",
  "type": "Lemma",
  "number": "158",
  "title": "Lemma 4.10.",
  "body": "Lemma 4.10   Let be an odd prime number and let with and odd. If then    "
},
{
  "id": "sec-proveQR-4-9",
  "level": "2",
  "url": "sec-proveQR.html#sec-proveQR-4-9",
  "type": "Proof",
  "number": "11.3.2.1",
  "title": "Proof of Law of Quadratic Reciprocity.",
  "body": "Proof of  Let and be distinct odd primes. Then from , where Thus, It remains to show that  Without loss of generality, assume that . We draw the rectangle and , as in the GeoGebra example. Then there are lattice points in this rectangle, excluding the axes.  The line segment between the origin and has slope . Since and are distinct primes, there are no lattice points on line segment except the endpoints.  For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle is . Next we will count the rest of the lattice points in the rectangle, the blue region in the GeoGebra. We willl call this number . The region is bounded by  and Now, the point where intersects is between two consecutive lattice points, with coordinates and Similarly, the point where intersects is between two consecutive lattice points, with coordinates and Thus, the only lattice point in the triangle and is . Therefore, there are also lattice points in the triangle with vertices  We use the same method as to find We will count how many lattice points on each vertical lines For each , we are counting positive integers Which is, . Thus, the total number of lattice points in this triangle is . Thus, the total number of lattice points is  "
},
{
  "id": "HWGuide-sec-basic-info",
  "level": "1",
  "url": "HWGuide-sec-basic-info.html",
  "type": "Section",
  "number": "A.1",
  "title": "Basic Information",
  "body": "Basic Information  Since you have more time to work on and write your homework, I expect the writing to be clearer and more formal than in-class work.  Turn in something! If you don't have time to rewrite your work to meet these guidelines, it is still better to get partial credit and feedback on what you have.  You are expected to write your final submissions on your own. If you work on a problem with someone else (in or out of class) you should acknowledge this on the cover sheet.  If you use a source that is not our course notes or a linked resource on Moodle, you must cite them in the final write up. You do not need to use any specific format for your citations–just provide enough information that I can find the resource. You may not look up solutions to any problem assigned in the course on the internet. Once you have seen a full solution, it is not possible to independently develop a solution.    "
},
{
  "id": "HWGuide-sec-general-math",
  "level": "1",
  "url": "HWGuide-sec-general-math.html",
  "type": "Section",
  "number": "A.2",
  "title": "General (Mathematical) Writing Rules",
  "body": "General (Mathematical) Writing Rules  Follow the Elements of Style for Proofs by Dana Ernst. Guidelines for Good Mathematical Writing by Francis Su is another resource available under the \"Additional Course Documents\" Module on Moodle. The textbooks are always a good guide for mathematical writing.  Keep the reader informed and explain your work at an appropriate level. Know your audience (other MAT-255 students). Explain each step clearly with details that another MAT-255 student would need to see, but leave out things below the level of this class (including excessive algebra)  Avoid terms like \"obvious(ly)\" and \"clear(ly)\". Often these terms are used as the mathematical writing equivalent of vocal pauses. Removing the word does not change anything else about the explanation. Sometimes students use them to (often unknowingly) skip having to check if something is actually true.  Make sure any pronoun has a clear antecedent. In general, words like \"this,\" \"that,\" \"these,\" and \"those\" should be used as adjectives (\"This equation...\") not pronouns (\"This is...\"). The Strayer textbook actually uses \"this\" as a pronoun frequently. I also have this habit, but it is not the clearest way to write.  Be sure to use mathematical conventions, not programming conventions. The most common mistakes are using line breaks instead of periods and using for negation.  Use or parentheses for multiplication when you cannot omit the operator. For example: cannot be written as . Since we are not going to discuss cross-products in this class, you may use , which is \\times , not x or X .  Cite previous results When using a result that we have already proved, clearly state the hypotheses of the theorem as it applies to your current situation. Then cite the theorem and finally state its conclusion in terms of your current proof. The theorem, lemma, or proposition might be from a previous homework or in-class assignment. For example, “We know that and , so by Proposition 1.1\" or “We know that and , so by transitivity.”  If using a method besides a direct proof (e.g. contrapositive, contradiction, or induction), tell the reader what method you are using. For example, you can write \"we will prove the contrapositive, which is…\" or \"for the sake of contradiction, we assume…” or \"we proceed by induction on .”    "
},
{
  "id": "HWGuide-sec-formal-math",
  "level": "1",
  "url": "HWGuide-sec-formal-math.html",
  "type": "Section",
  "number": "A.3",
  "title": "Formal Mathematical Writing",
  "body": "Formal Mathematical Writing  In our class, board-work, quizzes, any in-class work, and reading assignment answers are informal while homework and papers are formal . The following guidelines are for formal writing:  Write full and grammatically correct sentences, and include all equations in a sentence . Every equation can be read in words, and so it should fit properly within a sentence (including a period at the end!).  Break your writing into paragraphs each time a new idea begins. Use a new paragraph when you begin a new case for case analysis or for each direction of an \"if and only if\" proof.  Use the editorial or mathematical \"we\" instead of \"I\" or use \"one\". Use present tense Mathematics tends to be written as if the author and the reader are doing the mathematics together. \"One\" tends to sound overly formal or antiquated, but it is grammatically correct and accepted by mathematical journals.  Limit symbols and abbreviations to those from our Strayer textbook and any assigned readings other than the readings on symbolic logic . Also point 9 in Elements of Style for Proofs . A symbol list for Strayer is inside the front cover. You should also use standard relations: and which are also used throughout the text.  Explain other abbreviations and acronyms before using them.    There are also conventions around formatting, such as:  Don't start sentences with a mathematical symbol.  Define all variables before you use them . Before you use any new variable, define its meaning in a sentence or equation. Examples: “Let be a positive integer” or “Let ” (here must have been previously defined).  Always use symbols when writing a precise mathematical formula or equation (such as ).  Write all variables in math mode , both in sentences and in equations. This helps distinguish them from single-letter words and makes them easier to see.  In TeX, the proper way to begin and end inline math is with a $...$ or \\(...\\) . Display math mode can be written with \\[...\\] or by using the equation or align environments.  Use display math mode for important equations and formulas . If the left side of the equation does not change, don't repeat it. For example: Using algebra, we obtain: \\begin{align*} x y & = (2m+1)(2n+1)\\\\ & = 4mn + 2m + 2n + 1\\\\ & = 2(2mn+m+n) + 1.\\\\ \\end{align*} Since and are integers, we conclude that…   In TeX, multiline equations can be written using align environment or by using the split environment inside the equation environment.    Finally, a word of caution using theorems and definitions from other classes. Making connections between your other math classes is great! However, I want to make sure you understand the material from this course. Sometimes a problem specifies a method or to use a method from this course. If the problem does not specify, then you may use the knowledge from another math course if you consider the following:  Different courses studying the same concept from different perspectives can deepen your understanding of the concept. If you are using the knowledge from another course to enhance your understanding of this course or vice versa, awesome! Do not use this to avoid understanding the perspective in this course.  The statement of definitions and theorems should be included.  A fully correct, well explained solutions should demonstrate understanding of the material from this course as well as the other course. However, any mistakes or unclear explanations make it difficult to determine if the confusion is with this course's material or the other course.    "
},
{
  "id": "HWGuide-generic-rubrics",
  "level": "1",
  "url": "HWGuide-generic-rubrics.html",
  "type": "Section",
  "number": "A.4",
  "title": "Rubrics",
  "body": "Rubrics  Each problem in the Proofs and writing section will be graded with the following rubric:  Not assessible (0 points) Missing, blank, illegible, or only wrote down problem or other basic information such as a definition. This includes blurry scans and illegible handwriting on Homework 1 and rendering issues on typed homework.  Does not demonstrate understanding of the material (1 point)  Contains a reasonable attempt at solving the problem, but does not reach the level of Needs Improvement.  Circular reasoning (assuming what you are trying to prove) will automatically result in a score of \"Does Not Demonstrate Understanding\". If a problem specifies a certain method, using a different method will automatically result in \"Does Not Demonstrate Understanding,\" since the goal is to demonstrate understanding of the specified method.   Needs improvement or Needs revisions (2 points)  Basic outline of the mathematical argument is correct, with some details incorrect or unclear explanations.  Work shows partial understanding of the material, but it has significant gaps or errors. Writing may be difficult to follow.  Writing is difficult to understand with only one reading. Some calculations, formulas, or steps are not explained.  Solutions that only solve parts of a mulitpart problem or only solve one direction of an \"if and only if\" proof cannot score higher than Needs Improvement.   Demonstrates understanding of the key concepts (3 points)  Some parts may have small errors irrelevant to the key concepts and may be a bit difficult to follow.  Informal mathematical writing, including not following the homework guide for submission or Gradescope's submission instructions cannot score more than 3 points.   Exemplary (4 points) Demonstrates understanding of the concept with clear explanations. May include minor errors while still demonstrating understanding of the concepts. Writing is easy to follow with only one reading.    "
},
{
  "id": "hwguide-6",
  "level": "1",
  "url": "hwguide-6.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Thanks to Dr. Hannah Burson at the University of Minnesota for providing her grading specifications and flowchart to help modify this guide.  "
},
{
  "id": "r-hw1",
  "level": "1",
  "url": "r-hw1.html",
  "type": "Section",
  "number": "B.1",
  "title": "Homework 1 Rubrics",
  "body": " Homework 1 Rubrics   Initial rubrics for the Proofs and Writing problems. More detailed rubrics available on Gradescope once the assignment is graded.  Some solutions posted after the resubmission deadline.   Strayer Chapter 1, Exercise 5  Prove or disprove the following statements.  If and are integers such that and , then .  If and are integers such that and , then .  If and are integers such that and , then .enumerate       False: Let and . Then and . Therefore, .  Let and be integers such that and . Then there exists such that and , by definition of divides . Multiplying these two equations gives \\[ac=(bm)(dn)=(bd)(mn).\\] Therefore, .  False: Let and . Then and .enumerate     Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Two parts are mathematically correct, with the third containing major mathematical errors. Or proof has some significant gaps or excess information.  Demonstrates understanding. Two parts are mathematically correct, with minor errors in the third part. Or does not follow the homework guide for mathematical writing.  Exemplary. All three parts are mathematically correct and follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 10    Let . Prove that .  Let . Prove that .  Let . Is it true that ? Provide a proof or counter example.enumerate     There are several ways to do these problems. I used slightly different methods for parts (a) and (b).   Let . Then . By the Division Algorithm, there exists unique such that and . Thus,  If , then , so  If , then , so  If , then , so  Therefore, in all possible cases.    Let . Then . By the Division Algorithm, there exists unique such that and .  If , then If , then . If , then .  If , then and . Therefore, . If , then and . Therefore, . Thus, by transitivity of division, .   False: Let . Then and .     Rubrics:  The hint in the back of the book says to use induction for part (a). That is not necessary and likely harder.  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Two parts are mathematically correct with some missing details, with the third containing major mathematical errors. Or proof has some significant gaps or excess information.  Demonstrates understanding. Two parts are mathematically correct, with minor errors. Or does not follow the homework guide for mathematical writing.  Exemplary. All three parts are mathematically correct and follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 11  Use the definition of even and odd from Strayer and not Ernst.  Let . Prove that is an even integer if and only if with .  Let . Prove that is an odd integer if and only if with .  Prove that the sum and product of two even integers are even.  Prove that the sum of two odd integers is even and that their product is odd.  Prove that the sum of an even integer and an odd integer is odd and that their product is even.    Rubric for parts (a) and (b), graded together:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof has some significant gaps or excess information. Or does not prove both directions for both parts.  Demonstrates understanding. Contains minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplory. Correctly proves both directions of both (a) and (b). Work is easy to follow with formal mathematical writing.    Rubric for parts (c),(d), and (e), graded together:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for either the sum or product in one part.  Demonstrates understanding. Mathematically correct proof for all three parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplory. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing.     Ernst Problem 2.19  Let represent ``6 is an even integer” and represent ``4 divides 6.” Express each of the following compound propositions in an ordinary English sentence and then determine its truth value.                           ``6 is an even integer and 4 divides 6\". This is false because 4 does not divide 6.  ``6 is an even integer or 4 divides 6\". This is true because 6 is an even.  ``6 is not an even number\". This is false.  ``6 is not an even number or 4 does not divide 6\". This is true because 4 does not divide 6.  ``6 is not an even number and 4 does not divide 6\". This is false because 6 is an even number.  ``If 6 is an even integer, then 4 divides 6\". This is false because 4 does not divide 6.    Rubrics:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Three or four parts are mathematically and grammatically correct sentences.  Demonstrates understanding. Five or six parts are mathematically and grammatically correct sentences.  Exemplary. All parts are mathematically and grammatically correct sentences.     Ernst Problem 2.37  Let and represent the statements from Problem 2.19. Express each of the following in an ordinary English sentence.  The converse of   The contrapositive of      Let represent ``6 is an even integer” and represent ``4 divides 6.”  ``If 4 divides 6, then 6 is an even integer.`` Since 4 does not divide 6, any conclusion is vacuously true.  ``If 4 does not divides 6, then 6 is not an even integer.`` Since 6=2(3), this statement is false.     Rubrics:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. One part is not mathematically correct. Or both parts are missing the proof or counterexample.  Demonstrates understanding. Both parts correctly translate the statements into grammaticallly correct sentences. One part contains a mathematically correct proof or counterexample. Or does not follow the homework guide for mathematical writing.  Exemplary. Both parts correctly translate the statements into grammaticallly correct sentences with a mathematically correct proof or counterexample.      For each of the following equation, find what real numbers make the statement true. Prove your statement.              All of these statements could be stated as ``if and only if.\" The proofs below also work for both directions of the biconditional.   If the decimal part of is less than 0.5, then . In otherwords, if , then .  We will use the characterization . Then we add this inequality to itself to find By , Since the characterizations are the same, it must be that     If , then .  By , for all , and . That is, .    If , then   Since  requires . By part (b), for all .      Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Two parts are mathematically correct, with the third containing major mathematical errors. Or proof has some significant gaps or excess information.  Demonstrates understanding. Two parts are mathematically correct, with minor errors in the third part. Or does not follow the homework guide for mathematical writing.  Exemplary. All three parts are mathematically correct and follows the homework guide for mathematical writing.     "
},
{
  "id": "ch1-ex5",
  "level": "2",
  "url": "r-hw1.html#ch1-ex5",
  "type": "Problem",
  "number": "159",
  "title": "Strayer Chapter 1, Exercise 5.",
  "body": "Strayer Chapter 1, Exercise 5  Prove or disprove the following statements.  If and are integers such that and , then .  If and are integers such that and , then .  If and are integers such that and , then .enumerate       False: Let and . Then and . Therefore, .  Let and be integers such that and . Then there exists such that and , by definition of divides . Multiplying these two equations gives \\[ac=(bm)(dn)=(bd)(mn).\\] Therefore, .  False: Let and . Then and .enumerate     Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Two parts are mathematically correct, with the third containing major mathematical errors. Or proof has some significant gaps or excess information.  Demonstrates understanding. Two parts are mathematically correct, with minor errors in the third part. Or does not follow the homework guide for mathematical writing.  Exemplary. All three parts are mathematically correct and follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex10",
  "level": "2",
  "url": "r-hw1.html#ch1-ex10",
  "type": "Problem",
  "number": "160",
  "title": "Strayer Chapter 1, Exercise 10.",
  "body": "Strayer Chapter 1, Exercise 10    Let . Prove that .  Let . Prove that .  Let . Is it true that ? Provide a proof or counter example.enumerate     There are several ways to do these problems. I used slightly different methods for parts (a) and (b).   Let . Then . By the Division Algorithm, there exists unique such that and . Thus,  If , then , so  If , then , so  If , then , so  Therefore, in all possible cases.    Let . Then . By the Division Algorithm, there exists unique such that and .  If , then If , then . If , then .  If , then and . Therefore, . If , then and . Therefore, . Thus, by transitivity of division, .   False: Let . Then and .     Rubrics:  The hint in the back of the book says to use induction for part (a). That is not necessary and likely harder.  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Two parts are mathematically correct with some missing details, with the third containing major mathematical errors. Or proof has some significant gaps or excess information.  Demonstrates understanding. Two parts are mathematically correct, with minor errors. Or does not follow the homework guide for mathematical writing.  Exemplary. All three parts are mathematically correct and follows the homework guide for mathematical writing.    "
},
{
  "id": "def-even-odd",
  "level": "2",
  "url": "r-hw1.html#def-even-odd",
  "type": "Problem",
  "number": "161",
  "title": "Strayer Chapter 1, Exercise 11.",
  "body": "Strayer Chapter 1, Exercise 11  Use the definition of even and odd from Strayer and not Ernst.  Let . Prove that is an even integer if and only if with .  Let . Prove that is an odd integer if and only if with .  Prove that the sum and product of two even integers are even.  Prove that the sum of two odd integers is even and that their product is odd.  Prove that the sum of an even integer and an odd integer is odd and that their product is even.    Rubric for parts (a) and (b), graded together:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof has some significant gaps or excess information. Or does not prove both directions for both parts.  Demonstrates understanding. Contains minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplory. Correctly proves both directions of both (a) and (b). Work is easy to follow with formal mathematical writing.    Rubric for parts (c),(d), and (e), graded together:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for either the sum or product in one part.  Demonstrates understanding. Mathematically correct proof for all three parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplory. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "ernst-prob2.19",
  "level": "2",
  "url": "r-hw1.html#ernst-prob2.19",
  "type": "Problem",
  "number": "162",
  "title": "Ernst Problem 2.19.",
  "body": "Ernst Problem 2.19  Let represent ``6 is an even integer” and represent ``4 divides 6.” Express each of the following compound propositions in an ordinary English sentence and then determine its truth value.                           ``6 is an even integer and 4 divides 6\". This is false because 4 does not divide 6.  ``6 is an even integer or 4 divides 6\". This is true because 6 is an even.  ``6 is not an even number\". This is false.  ``6 is not an even number or 4 does not divide 6\". This is true because 4 does not divide 6.  ``6 is not an even number and 4 does not divide 6\". This is false because 6 is an even number.  ``If 6 is an even integer, then 4 divides 6\". This is false because 4 does not divide 6.    Rubrics:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Three or four parts are mathematically and grammatically correct sentences.  Demonstrates understanding. Five or six parts are mathematically and grammatically correct sentences.  Exemplary. All parts are mathematically and grammatically correct sentences.    "
},
{
  "id": "ernst-prob2.37",
  "level": "2",
  "url": "r-hw1.html#ernst-prob2.37",
  "type": "Problem",
  "number": "163",
  "title": "Ernst Problem 2.37.",
  "body": "Ernst Problem 2.37  Let and represent the statements from Problem 2.19. Express each of the following in an ordinary English sentence.  The converse of   The contrapositive of      Let represent ``6 is an even integer” and represent ``4 divides 6.”  ``If 4 divides 6, then 6 is an even integer.`` Since 4 does not divide 6, any conclusion is vacuously true.  ``If 4 does not divides 6, then 6 is not an even integer.`` Since 6=2(3), this statement is false.     Rubrics:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. One part is not mathematically correct. Or both parts are missing the proof or counterexample.  Demonstrates understanding. Both parts correctly translate the statements into grammaticallly correct sentences. One part contains a mathematically correct proof or counterexample. Or does not follow the homework guide for mathematical writing.  Exemplary. Both parts correctly translate the statements into grammaticallly correct sentences with a mathematically correct proof or counterexample.    "
},
{
  "id": "hw-tf",
  "level": "2",
  "url": "r-hw1.html#hw-tf",
  "type": "Problem",
  "number": "164",
  "title": "",
  "body": " For each of the following equation, find what real numbers make the statement true. Prove your statement.              All of these statements could be stated as ``if and only if.\" The proofs below also work for both directions of the biconditional.   If the decimal part of is less than 0.5, then . In otherwords, if , then .  We will use the characterization . Then we add this inequality to itself to find By , Since the characterizations are the same, it must be that     If , then .  By , for all , and . That is, .    If , then   Since  requires . By part (b), for all .      Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Two parts are mathematically correct, with the third containing major mathematical errors. Or proof has some significant gaps or excess information.  Demonstrates understanding. Two parts are mathematically correct, with minor errors in the third part. Or does not follow the homework guide for mathematical writing.  Exemplary. All three parts are mathematically correct and follows the homework guide for mathematical writing.    "
},
{
  "id": "r-hw2",
  "level": "1",
  "url": "r-hw2.html",
  "type": "Section",
  "number": "B.2",
  "title": "Homework 2 Rubrics",
  "body": " Homework 2 Rubrics   Initial rubrics for the Proofs and Writing problems. More detailed rubrics available on Gradescope once the assignment is graded.  Some solutions posted after the resubmission deadline.   Strayer Chapter 1, Exercise 7  Let with . Prove that for every positive integer .   Let with . Then there exists an integer such that By raising both sides of the equation to the power, we get Therefore, for all nonnegative integers    Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof contains some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof that there are only finitely many primes of the given form, with minor arithmetic, spelling, or grammatical errors. Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof that there are only finitely many primes of the given form. The proof likely uses the hint from the back, showing the only possible prime of this form is Work is easy to follow with formal mathematical writing.     Strayer Chapter 1, Exercise 9  Let and be positive integers with . Prove that if and only if ( Hint: For the ``if\" direction, write with a positive integer and use the factorization For the \"only if\" direction, use the Division Algorithm on and then show that the remainder is 0. This will need to be used multiple times.)   Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. One direction of the proof is mathematically correct, with mathematical errors in the other direction. Or proof has some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof that if implies likely using the hint. Most of the work for the proof of the other direction is present and clearly presented, but some steps are missing. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for both directions likely using the hint from the problem and additional hints from Slack. Follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 15  The following exercises present two alternative versions of the division algorithm. Both versions allow negative divisors; as such, they are more general than Theorem 1.4  Let and be nonzero integers. Prove that there exists a unique such that This algorithm is called the absolute least remainders algorithm  Find the unique and guarenteed by the division algorithm of part above with and .  Let and be nonzero integers. Prove that there exist unique such that   Find the unique and guarenteed by the division algorithm of part above with and .enumerate    Rubric for parts (a) and (b):  Does not demonstrate understanding. Contains proofs for existence of or an answer to part (b), but does not reach the level of needs revisions (2 pts). Parts of the proof are not mathematically correct, or the writing requires the reader to infer how the steps are related.  Needs revisions. Missing the case when or the justification of why and are unique. Or the proof has some gaps or unexplained steps.  Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or correct proof with incorrect solution to part (b). Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof and application of the division algorithm to part (b). The proof can use the Division Algorithm result or another method. Work is easy to follow with formal mathematical writing.    Rubric for parts (c) and (d):  Does not demonstrate understanding. Contains proofs for existence of or an answer to part (d), but does not reach the level of needs revisions (2 pts). Parts of the proof are not mathematically correct, or the writing requires the reader to infer how the steps are related.  Needs revisions. Missing the case when or the justification of why and are unique. Or the proof has some gaps or unexplained steps.  Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or correct proof with incorrect solution to part (d). Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof and application of the division algorithm to part (d). The proof can use the Division Algorithm result or another method. Work is easy to follow with formal mathematical writing.     Strayer Chapter 1, Exercise 23  Prove or disprove the following conjecture, which is similar to Conjecture 1:    There are infinitely many prime number for which and are also prime numbers.    Rubric:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof contains some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof that there are only finitely many primes of the given form, with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof that there are only finitely many primes of the given form. The proof likely uses the hint from the back, showing the only possible prime of this form is Work is easy to follow with formal mathematical writing.     Strayer Chapter 1, Exercise 25    Prove that all odd prime numbers can be expressed as the difference of square of two successive integers.  Prove that no prime numbers can be expressed as the difference of two fourth power integers ( Hint: Use the factorization tool discussed in the final paragraph of this section.)       We will prove that all odd numbers can be written as the difference of squares of two successive integers, therefore all odd prime numbers can be written in this form. Let and consider . Then Since are successive integers, we have the desired form.  Let such that We will show that is either composite or First note that and implies  If then one of and the other is Thus, If then and Therefore, if either factor is  .  If neither is then the product is not prime by definition. Therefore, no prime can be written as the difference if two integers to the fourth power.      Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof contains some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof for one part with most of the proof for the other. May contain minor arithmetic, spelling, or grammatical errors. Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof for both parts, likely using factoring and case analysis for part (b). Work is easy to follow with formal mathematical writing.     Ernst Problem 2.50  Consider the following statement: If such that is odd, then is odd. The items below can be assembled to form a proof of this statement, but they are currently out of order. Put them in the proper order.  Assume that is an even integer.  We will utilize a proof by contraposition.  Thus, is twice an integer.  Since , we have that .  Since is an integer, is also an integer.  By the definition of even, there is an integer such that .  We have proved the contrapositive, and hence the desired statement is true.  Assume .  By the definition of even integer, is an even integer.  Notice that .    Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Exemplary. All steps are in the correct order     "
},
{
  "id": "r-hw2-3",
  "level": "2",
  "url": "r-hw2.html#r-hw2-3",
  "type": "Problem",
  "number": "165",
  "title": "Strayer Chapter 1, Exercise 7.",
  "body": "Strayer Chapter 1, Exercise 7  Let with . Prove that for every positive integer .   Let with . Then there exists an integer such that By raising both sides of the equation to the power, we get Therefore, for all nonnegative integers    Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof contains some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof that there are only finitely many primes of the given form, with minor arithmetic, spelling, or grammatical errors. Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof that there are only finitely many primes of the given form. The proof likely uses the hint from the back, showing the only possible prime of this form is Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "ch1-ex9",
  "level": "2",
  "url": "r-hw2.html#ch1-ex9",
  "type": "Problem",
  "number": "166",
  "title": "Strayer Chapter 1, Exercise 9.",
  "body": "Strayer Chapter 1, Exercise 9  Let and be positive integers with . Prove that if and only if ( Hint: For the ``if\" direction, write with a positive integer and use the factorization For the \"only if\" direction, use the Division Algorithm on and then show that the remainder is 0. This will need to be used multiple times.)   Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. One direction of the proof is mathematically correct, with mathematical errors in the other direction. Or proof has some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof that if implies likely using the hint. Most of the work for the proof of the other direction is present and clearly presented, but some steps are missing. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for both directions likely using the hint from the problem and additional hints from Slack. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex15",
  "level": "2",
  "url": "r-hw2.html#ch1-ex15",
  "type": "Problem",
  "number": "167",
  "title": "Strayer Chapter 1, Exercise 15.",
  "body": "Strayer Chapter 1, Exercise 15  The following exercises present two alternative versions of the division algorithm. Both versions allow negative divisors; as such, they are more general than Theorem 1.4  Let and be nonzero integers. Prove that there exists a unique such that This algorithm is called the absolute least remainders algorithm  Find the unique and guarenteed by the division algorithm of part above with and .  Let and be nonzero integers. Prove that there exist unique such that   Find the unique and guarenteed by the division algorithm of part above with and .enumerate    Rubric for parts (a) and (b):  Does not demonstrate understanding. Contains proofs for existence of or an answer to part (b), but does not reach the level of needs revisions (2 pts). Parts of the proof are not mathematically correct, or the writing requires the reader to infer how the steps are related.  Needs revisions. Missing the case when or the justification of why and are unique. Or the proof has some gaps or unexplained steps.  Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or correct proof with incorrect solution to part (b). Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof and application of the division algorithm to part (b). The proof can use the Division Algorithm result or another method. Work is easy to follow with formal mathematical writing.    Rubric for parts (c) and (d):  Does not demonstrate understanding. Contains proofs for existence of or an answer to part (d), but does not reach the level of needs revisions (2 pts). Parts of the proof are not mathematically correct, or the writing requires the reader to infer how the steps are related.  Needs revisions. Missing the case when or the justification of why and are unique. Or the proof has some gaps or unexplained steps.  Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or correct proof with incorrect solution to part (d). Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof and application of the division algorithm to part (d). The proof can use the Division Algorithm result or another method. Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "ch1-ex23",
  "level": "2",
  "url": "r-hw2.html#ch1-ex23",
  "type": "Problem",
  "number": "168",
  "title": "Strayer Chapter 1, Exercise 23.",
  "body": "Strayer Chapter 1, Exercise 23  Prove or disprove the following conjecture, which is similar to Conjecture 1:    There are infinitely many prime number for which and are also prime numbers.    Rubric:  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof contains some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof that there are only finitely many primes of the given form, with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof that there are only finitely many primes of the given form. The proof likely uses the hint from the back, showing the only possible prime of this form is Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "ch1-ex25",
  "level": "2",
  "url": "r-hw2.html#ch1-ex25",
  "type": "Problem",
  "number": "170",
  "title": "Strayer Chapter 1, Exercise 25.",
  "body": "Strayer Chapter 1, Exercise 25    Prove that all odd prime numbers can be expressed as the difference of square of two successive integers.  Prove that no prime numbers can be expressed as the difference of two fourth power integers ( Hint: Use the factorization tool discussed in the final paragraph of this section.)       We will prove that all odd numbers can be written as the difference of squares of two successive integers, therefore all odd prime numbers can be written in this form. Let and consider . Then Since are successive integers, we have the desired form.  Let such that We will show that is either composite or First note that and implies  If then one of and the other is Thus, If then and Therefore, if either factor is  .  If neither is then the product is not prime by definition. Therefore, no prime can be written as the difference if two integers to the fourth power.      Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Needs revisions. Proof contains some significant gaps or excess information.  Demonstrates understanding. Mathematically correct proof for one part with most of the proof for the other. May contain minor arithmetic, spelling, or grammatical errors. Or does not follow the Homework Guide for writing.  Exemplary. Mathematically correct proof for both parts, likely using factoring and case analysis for part (b). Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "ernst-prob2.50",
  "level": "2",
  "url": "r-hw2.html#ernst-prob2.50",
  "type": "Problem",
  "number": "171",
  "title": "Ernst Problem 2.50.",
  "body": "Ernst Problem 2.50  Consider the following statement: If such that is odd, then is odd. The items below can be assembled to form a proof of this statement, but they are currently out of order. Put them in the proper order.  Assume that is an even integer.  We will utilize a proof by contraposition.  Thus, is twice an integer.  Since , we have that .  Since is an integer, is also an integer.  By the definition of even, there is an integer such that .  We have proved the contrapositive, and hence the desired statement is true.  Assume .  By the definition of even integer, is an even integer.  Notice that .    Rubric  Does not demonstrate understanding. Contains a reasonable attempt to prove each part, but does not meet the criteria for two points.  Exemplary. All steps are in the correct order    "
},
{
  "id": "r-hw3",
  "level": "1",
  "url": "r-hw3.html",
  "type": "Section",
  "number": "B.3",
  "title": "Homework 3 Rubrics",
  "body": " Homework 3 Rubrics   Initial rubrics for the Proofs and Writing problems. More detailed rubrics available on Gradescope once the assignment is graded.  Some solutions posted after the resubmission deadline.   Strayer Chapter 1, Exercise 36    Do there exist integers and such that and ?  Prove that there exist infinitely many pairs of integers and such that and .       If then by linear combination. Since there does not exist integers and such that and .  Let with Let . Then by linear combination. Then since . Thus, there are infinitely many such that and .     Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Contains correct definition of divisibility, with major algebra errors, such as . Or proof has some significant gaps or excess information.  Demonstrates understanding. Most of the work for the proof is present and clearly presented, but some steps are missing. Or does not follow the homework guide for mathematical writing, including correctly selecting pages for each problem.  Exemplary. Mathematically correct proof using the definition of divides. Follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 37  Let not both zero and let be a nonzero integer. Prove that for all not both  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Contains the correct outline of the proof with significant gaps or errors in reasoning. Or only shows one of or but not both  Demonstrates understanding. Correct outline of the proof, with minor gaps or errors in reasoning, such as explaining why we can conclude Or does not follow the homework guide for mathematical writing, including correctly selecting pages for each problem.  Exemplary. Mathematically correct proof using the definition of greatest common divisor and divisibility. Explanations are easy to follow with one reading. Follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercises 38-40   Strayer Chapter 1, Exercises 38  Let and be relatively prime integers. Prove that is either or   Let and note that and by linear combination. By , since by assumption. Since is a common divisor of and  by . Thus,     Srayer Chater 1, Exercise 39 Let and be relatively prime integers. Find all values of   Let and note that and by linear combination. By , since by assumption. Since is a common divisor of and  by . Thus,  Note that both and can occur. For example, when we have so When and we have and so    Exercise 40 Let with and . Find and prove that your answer is correct.  Let with and . Then   Since there exists such that and otherwise Similarly, there exists such that and Therefore, are both even. Thus, . By Part d , is even, so Thus,      Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Correct classification and reasoning for at least two parts. Either incorrect third part, or proofs contain significant gaps, errors, or excess information.  Demonstrates understanding. Correct statement for all parts, but some steps are missing in the proofs of two parts. Or correct statement and proof for three parts. Or does not follow the homework guide for mathematical writing, including correctly selecting pages for each problem.  Exemplary. Mathematically correct proof using the definition of greatest common divisor and divisibility. Likely using linear combinations for most parts. Explanations are easy to follow with one reading. Follows the homework guide for mathematical writing.     Homework 3, Problem 4  Let with and let Show that is a common divisor of if and only if    We proceed by induction.   Base case, By , if is a common divisor of then By , if then is a common divisor of and    Induction Hypothesis: Assume that for all  is a common divisor of if and only if   ( ) Let is a common divisor of Then by the induction hypothesis, Thus by the base case, and by , Thus,   ( ) Let such that By , Thus by the base case, since  is a common divisor of and Then by the induction hypothesis, is a commom divisor of and thus a common divisor of      Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Proof uses the result of or for without first proving that the result holds when Or the proof has some gaps or unexplained steps.   Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 51  Let with . Prove that Use this method to compute the greatest common divisor of each set of integers in Exercise 34.  Exercise 34                                  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Proof uses earlier result for without first proving that the result holds when Or the proof has some gaps or unexplained steps.   Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 83  Let with and . Prove that the arithmetic progression contains infinitely many composite numbers.  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Proof uses earlier result for without first proving that the result holds when Or the proof has some gaps or unexplained steps.   Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     "
},
{
  "id": "ch1-ex36",
  "level": "2",
  "url": "r-hw3.html#ch1-ex36",
  "type": "Problem",
  "number": "172",
  "title": "Strayer Chapter 1, Exercise 36.",
  "body": "Strayer Chapter 1, Exercise 36    Do there exist integers and such that and ?  Prove that there exist infinitely many pairs of integers and such that and .       If then by linear combination. Since there does not exist integers and such that and .  Let with Let . Then by linear combination. Then since . Thus, there are infinitely many such that and .     Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Contains correct definition of divisibility, with major algebra errors, such as . Or proof has some significant gaps or excess information.  Demonstrates understanding. Most of the work for the proof is present and clearly presented, but some steps are missing. Or does not follow the homework guide for mathematical writing, including correctly selecting pages for each problem.  Exemplary. Mathematically correct proof using the definition of divides. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex37",
  "level": "2",
  "url": "r-hw3.html#ch1-ex37",
  "type": "Problem",
  "number": "173",
  "title": "Strayer Chapter 1, Exercise 37.",
  "body": "Strayer Chapter 1, Exercise 37  Let not both zero and let be a nonzero integer. Prove that for all not both  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Contains the correct outline of the proof with significant gaps or errors in reasoning. Or only shows one of or but not both  Demonstrates understanding. Correct outline of the proof, with minor gaps or errors in reasoning, such as explaining why we can conclude Or does not follow the homework guide for mathematical writing, including correctly selecting pages for each problem.  Exemplary. Mathematically correct proof using the definition of greatest common divisor and divisibility. Explanations are easy to follow with one reading. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex38-40",
  "level": "2",
  "url": "r-hw3.html#ch1-ex38-40",
  "type": "Problem",
  "number": "174",
  "title": "Strayer Chapter 1, Exercises 38-40.",
  "body": "Strayer Chapter 1, Exercises 38-40   Strayer Chapter 1, Exercises 38  Let and be relatively prime integers. Prove that is either or   Let and note that and by linear combination. By , since by assumption. Since is a common divisor of and  by . Thus,     Srayer Chater 1, Exercise 39 Let and be relatively prime integers. Find all values of   Let and note that and by linear combination. By , since by assumption. Since is a common divisor of and  by . Thus,  Note that both and can occur. For example, when we have so When and we have and so    Exercise 40 Let with and . Find and prove that your answer is correct.  Let with and . Then   Since there exists such that and otherwise Similarly, there exists such that and Therefore, are both even. Thus, . By Part d , is even, so Thus,      Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Correct classification and reasoning for at least two parts. Either incorrect third part, or proofs contain significant gaps, errors, or excess information.  Demonstrates understanding. Correct statement for all parts, but some steps are missing in the proofs of two parts. Or correct statement and proof for three parts. Or does not follow the homework guide for mathematical writing, including correctly selecting pages for each problem.  Exemplary. Mathematically correct proof using the definition of greatest common divisor and divisibility. Likely using linear combinations for most parts. Explanations are easy to follow with one reading. Follows the homework guide for mathematical writing.    "
},
{
  "id": "hw3-lemma",
  "level": "2",
  "url": "r-hw3.html#hw3-lemma",
  "type": "Problem",
  "number": "176",
  "title": "Homework 3, Problem 4.",
  "body": "Homework 3, Problem 4  Let with and let Show that is a common divisor of if and only if    We proceed by induction.   Base case, By , if is a common divisor of then By , if then is a common divisor of and    Induction Hypothesis: Assume that for all  is a common divisor of if and only if   ( ) Let is a common divisor of Then by the induction hypothesis, Thus by the base case, and by , Thus,   ( ) Let such that By , Thus by the base case, since  is a common divisor of and Then by the induction hypothesis, is a commom divisor of and thus a common divisor of      Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Proof uses the result of or for without first proving that the result holds when Or the proof has some gaps or unexplained steps.   Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex51",
  "level": "2",
  "url": "r-hw3.html#ch1-ex51",
  "type": "Problem",
  "number": "177",
  "title": "Strayer Chapter 1, Exercise 51.",
  "body": "Strayer Chapter 1, Exercise 51  Let with . Prove that Use this method to compute the greatest common divisor of each set of integers in Exercise 34.  Exercise 34                                  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Proof uses earlier result for without first proving that the result holds when Or the proof has some gaps or unexplained steps.   Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex83",
  "level": "2",
  "url": "r-hw3.html#ch1-ex83",
  "type": "Problem",
  "number": "178",
  "title": "Strayer Chapter 1, Exercise 83.",
  "body": "Strayer Chapter 1, Exercise 83  Let with and . Prove that the arithmetic progression contains infinitely many composite numbers.  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions.  Needs revisions. Proof uses earlier result for without first proving that the result holds when Or the proof has some gaps or unexplained steps.   Demonstrates understanding. Mathematically correct proof for all parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "r-hw4",
  "level": "1",
  "url": "r-hw4.html",
  "type": "Section",
  "number": "B.4",
  "title": "Homework 4 Rubrics",
  "body": " Homework 4 Rubrics   Initial rubrics for the Proofs and Writing problems. More detailed rubrics available on Gradescope once the assignment is graded.  Some solutions posted after the resubmission deadline.   Strayer Chapter 1, Exercise 70  Prove or disprove the following statements:  If and then .  If and then .  If  is a prime number and then    Let and and for primes and nonnegative integers The says that the prime factorization is unique.  If we cannot conclude For example, if and then and  If then there exists such that . Substituting in the prime factorizations gives Since is an integer, we can say and for all Thus is an integer and Returning to the nonfactored form, we have and we can square root both sides to get get Thus, by definition .  If  is a prime number and then    Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for one part.  Demonstrates understanding. Mathematically correct proof for all three parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 1, Exercise 79  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for the statement in part (b).  Demonstrates understanding. Mathematically correct proof for part (a) and one direction of the proof in part (b) with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 11  Let such that Prove that   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for the statement in part (b).  Demonstrates understanding. Mathematically correct proof for part (a) and one direction of the proof in part (b) with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 13    Let be an even integer. Prove that  Let be an odd integer. Prove that Deduce that  This means you must use to prove and not another method.  Prove that if is a positive integer such that then cannot be written as the sum of two squares of integers.  Prove or disprove the converse of the statement in part above.      Let be an even integer. Then there exists such that . Thus and Therefore, by .  Let be an odd integer. Then there exists such that . Thus . Since either or is even, and and Therefore, by definition of .  Part c gives that   Since modulo is an equivalence relationship, we only need to check the squares of and modulo Since and the only squares are and  Now we check all possible combinations. Since addition is commutative, we have three options: Since none of these options are we can conclude that if is a positive integer such that then cannot be written as the sum of two squares of integers.  Note that cannot be written as the sum of two squares: and are less than and is too large.     Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proofs have some significant gaps or excess information. Or missing the proof for two parts.  Demonstrates understanding. Mathematically correct proof for three parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 14  Let be an odd integer not divisible by Prove that   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the relationship between divisibility and modular arithmetic, but it has significant gaps or errors. Writing may be difficult to follow. It needs further review and significant revisions.  Demonstrates understanding. Mathematically correct proof using the method from class with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Uses the method from class. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 17  Prove that a positive integer is divisible by (respectively ) if and only if the sum of its digits is divisible by (respectively ).   Using the notation from problem 16, we can write the a positive integer and where are the digits of Since and repeated applications of Proposition 2.4 gives and Thus   Thus, if and only if . Since implies by definition , we have if and only if the sum of its digits is divisible by .  Similarly, if and only if . Since implies by definition , we have if and only if the sum of its digits is divisible by .   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the relationship between divisibility and modular arithmetic, but it has significant gaps or errors. Writing may be difficult to follow. It needs further review and significant revisions.  Demonstrates understanding. Mathematically correct proof using the method from this section with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for both and . Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 32  Let be the inverse of modulo and let be the inverse of modulo . Prove that is the inverse of modulo   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the relationship between divisibility and modular arithmetic, but it has significant gaps or errors. Writing may be difficult to follow. It needs further review and significant revisions.  Demonstrates understanding. Mathematically correct proof using the method from this section with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for both and . Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 38  Prove that the system of linear congruences in one variable given by is solvable if and only if In this case, prove that the solution is unique modulo   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Missing proof of uniqueness or one direction of the if and only if. Or proof contains significant gaps or errors. Writing may be difficult to follow.  Demonstrates understanding. Missing some justification of steps in the proofs. Or minor arithmetic, spelling, or grammatical errors throughout. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Homework 4, Problem 9    Let be prime. Prove that implies or  Give an example to show that (a) is false modulo a composite number.       Let be prime and let . If then and we are done. Otherwise, Then by , there exists a unique solution modulo to the congruence Since is a solution, we can conclude this is the only solution modulo Thus, if then either or  Notes that In fact, if with and then     Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof contains significant gaps or errors. Writing may be difficult to follow.  Demonstrates understanding. Mathematically correct proof for part (a) and counter example for part (b) with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     "
},
{
  "id": "ch1-ex70",
  "level": "2",
  "url": "r-hw4.html#ch1-ex70",
  "type": "Problem",
  "number": "179",
  "title": "Strayer Chapter 1, Exercise 70.",
  "body": "Strayer Chapter 1, Exercise 70  Prove or disprove the following statements:  If and then .  If and then .  If  is a prime number and then    Let and and for primes and nonnegative integers The says that the prime factorization is unique.  If we cannot conclude For example, if and then and  If then there exists such that . Substituting in the prime factorizations gives Since is an integer, we can say and for all Thus is an integer and Returning to the nonfactored form, we have and we can square root both sides to get get Thus, by definition .  If  is a prime number and then    Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for one part.  Demonstrates understanding. Mathematically correct proof for all three parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch1-ex79",
  "level": "2",
  "url": "r-hw4.html#ch1-ex79",
  "type": "Problem",
  "number": "180",
  "title": "Strayer Chapter 1, Exercise 79.",
  "body": "Strayer Chapter 1, Exercise 79  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for the statement in part (b).  Demonstrates understanding. Mathematically correct proof for part (a) and one direction of the proof in part (b) with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex11",
  "level": "2",
  "url": "r-hw4.html#ch2-ex11",
  "type": "Problem",
  "number": "181",
  "title": "Strayer Chapter 2, Exercise 11.",
  "body": "Strayer Chapter 2, Exercise 11  Let such that Prove that   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof has some significant gaps or excess information. Or missing the proof for the statement in part (b).  Demonstrates understanding. Mathematically correct proof for part (a) and one direction of the proof in part (b) with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex13",
  "level": "2",
  "url": "r-hw4.html#ch2-ex13",
  "type": "Problem",
  "number": "182",
  "title": "Strayer Chapter 2, Exercise 13.",
  "body": "Strayer Chapter 2, Exercise 13    Let be an even integer. Prove that  Let be an odd integer. Prove that Deduce that  This means you must use to prove and not another method.  Prove that if is a positive integer such that then cannot be written as the sum of two squares of integers.  Prove or disprove the converse of the statement in part above.      Let be an even integer. Then there exists such that . Thus and Therefore, by .  Let be an odd integer. Then there exists such that . Thus . Since either or is even, and and Therefore, by definition of .  Part c gives that   Since modulo is an equivalence relationship, we only need to check the squares of and modulo Since and the only squares are and  Now we check all possible combinations. Since addition is commutative, we have three options: Since none of these options are we can conclude that if is a positive integer such that then cannot be written as the sum of two squares of integers.  Note that cannot be written as the sum of two squares: and are less than and is too large.     Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proofs have some significant gaps or excess information. Or missing the proof for two parts.  Demonstrates understanding. Mathematically correct proof for three parts with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex14",
  "level": "2",
  "url": "r-hw4.html#ch2-ex14",
  "type": "Problem",
  "number": "183",
  "title": "Strayer Chapter 2, Exercise 14.",
  "body": "Strayer Chapter 2, Exercise 14  Let be an odd integer not divisible by Prove that   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the relationship between divisibility and modular arithmetic, but it has significant gaps or errors. Writing may be difficult to follow. It needs further review and significant revisions.  Demonstrates understanding. Mathematically correct proof using the method from class with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Uses the method from class. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-17",
  "level": "2",
  "url": "r-hw4.html#ch2-17",
  "type": "Problem",
  "number": "184",
  "title": "Strayer Chapter 2, Exercise 17.",
  "body": "Strayer Chapter 2, Exercise 17  Prove that a positive integer is divisible by (respectively ) if and only if the sum of its digits is divisible by (respectively ).   Using the notation from problem 16, we can write the a positive integer and where are the digits of Since and repeated applications of Proposition 2.4 gives and Thus   Thus, if and only if . Since implies by definition , we have if and only if the sum of its digits is divisible by .  Similarly, if and only if . Since implies by definition , we have if and only if the sum of its digits is divisible by .   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the relationship between divisibility and modular arithmetic, but it has significant gaps or errors. Writing may be difficult to follow. It needs further review and significant revisions.  Demonstrates understanding. Mathematically correct proof using the method from this section with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for both and . Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex32",
  "level": "2",
  "url": "r-hw4.html#ch2-ex32",
  "type": "Problem",
  "number": "185",
  "title": "Strayer Chapter 2, Exercise 32.",
  "body": "Strayer Chapter 2, Exercise 32  Let be the inverse of modulo and let be the inverse of modulo . Prove that is the inverse of modulo   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the relationship between divisibility and modular arithmetic, but it has significant gaps or errors. Writing may be difficult to follow. It needs further review and significant revisions.  Demonstrates understanding. Mathematically correct proof using the method from this section with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for both and . Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex38",
  "level": "2",
  "url": "r-hw4.html#ch2-ex38",
  "type": "Problem",
  "number": "186",
  "title": "Strayer Chapter 2, Exercise 38.",
  "body": "Strayer Chapter 2, Exercise 38  Prove that the system of linear congruences in one variable given by is solvable if and only if In this case, prove that the solution is unique modulo   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Missing proof of uniqueness or one direction of the if and only if. Or proof contains significant gaps or errors. Writing may be difficult to follow.  Demonstrates understanding. Missing some justification of steps in the proofs. Or minor arithmetic, spelling, or grammatical errors throughout. Or uses informal mathematical writing.  Exemplary. Work contains all necessary steps. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "hw4-ex9",
  "level": "2",
  "url": "r-hw4.html#hw4-ex9",
  "type": "Problem",
  "number": "187",
  "title": "Homework 4, Problem 9.",
  "body": "Homework 4, Problem 9    Let be prime. Prove that implies or  Give an example to show that (a) is false modulo a composite number.       Let be prime and let . If then and we are done. Otherwise, Then by , there exists a unique solution modulo to the congruence Since is a solution, we can conclude this is the only solution modulo Thus, if then either or  Notes that In fact, if with and then     Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof contains significant gaps or errors. Writing may be difficult to follow.  Demonstrates understanding. Mathematically correct proof for part (a) and counter example for part (b) with minor arithmetic, spelling, or grammatical errors. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for all three parts. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "r-hw5",
  "level": "1",
  "url": "r-hw5.html",
  "type": "Section",
  "number": "B.5",
  "title": "Homework 5 Rubrics",
  "body": " Homework 5 Rubrics   Initial rubrics for the Proofs and Writing problems. More detailed rubrics available on Gradescope once the assignment is graded.  Some solutions posted after the resubmission deadline.   Strayer Chapter 2, Exercise 43    Prove that is is an odd prime number, then .  Find the least nonnegative residue of modulo     Rubric  Does not demonstrate understanding. Contains solution for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof for part (a) has some significant gaps or excess information. Or the solution to part (b) is not correct.  Demonstrates understanding. Mathematically correct proof for part (a) with minor arithmetic, spelling, or grammatical errors. Solution to part (b) may be equivalent to but not the least nonnegative residue. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for part (a) using Wilson's Theorem. Correct least nonnegative residue for part (b), likely using part (a). Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 44  Let with Prove that is a prime number if and only if    Rubric  Does not demonstrate understanding. Contains parts of the proof using the definition of factorial, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof for one direction is incorrect or missing, or proof for both part contain significant gaps, errors, or excess information. Or proof that implies is prime relies on while proof of relies on this problem (circular reasoning).  Demonstrates understanding. Mathematically correct proof for both directions with some arithmetic, spelling, or grammatical errors. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for both directions, using Wilson's Theorem and either its converse or . Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 45  Let be a composite integer greater than 4. Prove that .  Rubric  Does not demonstrate understanding. Contains parts of the proof using the definition of factorial, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the material, but it has significant gaps, errors, or excess information throughout. Writing may be difficult to follow.  Demonstrates understanding. Mathematically correct proof when can be factored into two distinct factors, possibly with minor arithmetic, spelling, or grammatical errors. Missing or incorrect proof for where is prime. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct and complete proof using the definition of composite integer and factorial. Likely using the proof of as guide. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 57  (Using Fermat's Little Theorem) Let be an integer. Prove each congruence below.    .    See   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or does not use .  Needs revisions. Two parts correct, with major errors in the third part.  Demonstrates understanding. Mathematically correct proofs that implicitly use either the Chinese Remainder Theorem or divisibility rules, but does not explain why checking modulo the prime factors proves the statements. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for all three parts using a combination of Fermat's Little Theorem and either the Chinese Remainder Theorem or divisibility rules Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 60  Let and be distinct prime numbers with . If with prove that .  See for a similar problem.  Rubric  Does not demonstrate understanding. Proof contains enough of the relevant concepts to provide feedback, but does not reach the level of needs revisions.  Needs revisions. Correctly uses Fermat's Little Theorem for moduli and , but does not correctly explain how this gives the solution modulo .  Demonstrates understanding. Mathematically correct proofs that implicitly use either the Chinese Remainder Theorem or divisibility rules, but does not explain why checking modulo the prime factors proves the statements. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for all three parts using a combination of Fermat's Little Theorem and either the Chinese Remainder Theorem or divisibility rules Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 67  Prove that following the steps in the proof of Euler's Theorem (Theorem 2.17)  Rubric  Does not demonstrate understanding. Uses Euler's Theorem or another method other than the one specified instead of following the steps in the proof of Euler's Theorem.  Needs revisions. Proof contains enough of the relevant concepts to provide feedback, but does not reach the level of demonstrates understanding.  Demonstrates understanding. Contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Proof closely and correctly follows the proof of Euler's Theorem. Work is easy to follow with formal mathematical writing.     Strayer Chapter 2, Exercise 71  (Using and )  Let be an integer not divisible by . Prove that .  Let be an integer divisible by . Prove that .    See and accompanying remark.  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or does not use .  Needs revisions. One parts correct, with major errors in the other part.  Demonstrates understanding. Mathematically correct proofs that implicitly use either the Chinese Remainder Theorem or divisibility rules, but does not explain why checking modulo the prime factors proves the statements. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for all three parts using a combination of Fermat's Little Theorem and either the Chinese Remainder Theorem or divisibility rules Follows the homework guide for mathematical writing.     Strayer Chapter 2, Exercise 74  Let be an odd prime number. Prove that is a reduced residue system modulo .   We did not do Chapter 2, Exercise 27, but it might be helpful to prove that first. Either use a similar argument for this problem, or use the result (as long as you also include the proof of Exercise 27 as part of the proof of this problem).    Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Only proves that the elements of the list are incongruent modulo without justifying that every integer that is relatively prime to is congruent to an element of the list.  Demonstrates understanding. Mathematically correct proofs that implicitly use that is a reduced residue system without proof. Or contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof using the definition of . May include minor errors while still demonstrating understanding of the concepts. Writing is easy to follow with only one reading.     Strayer Chapter 3, Exercise 11  Complete the proof of Theorem 3.2 by proving that if and are positive integers with then the integers form a complete system of residues modulo .   Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Only proves that the elements of the list are incongruent modulo without justifying that every integer is congruent to an element of the list.  Demonstrates understanding. Mathematically correct proofs that states it suffices to show the elements of the list are incongruent without justification. Or contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof using the definition of . May include minor errors while still demonstrating understanding of the concepts. Writing is easy to follow with only one reading.     Strayer Chapter 3, Exercise 12  Let with If is the prime factorization of prove that   Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Proof contains significant gaps, errors, or excess information.  Demonstrates understanding. Mathematically correct proofs that contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof. May include minor errors while still demonstrating understanding of the concepts. Work is easy to follow with formal mathematical writing.     "
},
{
  "id": "ch2-ex43",
  "level": "2",
  "url": "r-hw5.html#ch2-ex43",
  "type": "Problem",
  "number": "188",
  "title": "Strayer Chapter 2, Exercise 43.",
  "body": "Strayer Chapter 2, Exercise 43    Prove that is is an odd prime number, then .  Find the least nonnegative residue of modulo     Rubric  Does not demonstrate understanding. Contains solution for at least one part, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof for part (a) has some significant gaps or excess information. Or the solution to part (b) is not correct.  Demonstrates understanding. Mathematically correct proof for part (a) with minor arithmetic, spelling, or grammatical errors. Solution to part (b) may be equivalent to but not the least nonnegative residue. Or uses informal mathematical writing.  Exemplary. Mathematically correct proof for part (a) using Wilson's Theorem. Correct least nonnegative residue for part (b), likely using part (a). Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex44",
  "level": "2",
  "url": "r-hw5.html#ch2-ex44",
  "type": "Problem",
  "number": "189",
  "title": "Strayer Chapter 2, Exercise 44.",
  "body": "Strayer Chapter 2, Exercise 44  Let with Prove that is a prime number if and only if    Rubric  Does not demonstrate understanding. Contains parts of the proof using the definition of factorial, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Proof for one direction is incorrect or missing, or proof for both part contain significant gaps, errors, or excess information. Or proof that implies is prime relies on while proof of relies on this problem (circular reasoning).  Demonstrates understanding. Mathematically correct proof for both directions with some arithmetic, spelling, or grammatical errors. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for both directions, using Wilson's Theorem and either its converse or . Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex45",
  "level": "2",
  "url": "r-hw5.html#ch2-ex45",
  "type": "Problem",
  "number": "190",
  "title": "Strayer Chapter 2, Exercise 45.",
  "body": "Strayer Chapter 2, Exercise 45  Let be a composite integer greater than 4. Prove that .  Rubric  Does not demonstrate understanding. Contains parts of the proof using the definition of factorial, but does not reach the level of needs revisions. Or writing is difficult to follow, requiring the reader to infer the connections between the steps.  Needs revisions. Work shows partial understanding of the material, but it has significant gaps, errors, or excess information throughout. Writing may be difficult to follow.  Demonstrates understanding. Mathematically correct proof when can be factored into two distinct factors, possibly with minor arithmetic, spelling, or grammatical errors. Missing or incorrect proof for where is prime. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct and complete proof using the definition of composite integer and factorial. Likely using the proof of as guide. Work is easy to follow with formal mathematical writing. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex57",
  "level": "2",
  "url": "r-hw5.html#ch2-ex57",
  "type": "Problem",
  "number": "191",
  "title": "Strayer Chapter 2, Exercise 57.",
  "body": "Strayer Chapter 2, Exercise 57  (Using Fermat's Little Theorem) Let be an integer. Prove each congruence below.    .    See   Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or does not use .  Needs revisions. Two parts correct, with major errors in the third part.  Demonstrates understanding. Mathematically correct proofs that implicitly use either the Chinese Remainder Theorem or divisibility rules, but does not explain why checking modulo the prime factors proves the statements. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for all three parts using a combination of Fermat's Little Theorem and either the Chinese Remainder Theorem or divisibility rules Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-60",
  "level": "2",
  "url": "r-hw5.html#ch2-60",
  "type": "Problem",
  "number": "192",
  "title": "Strayer Chapter 2, Exercise 60.",
  "body": "Strayer Chapter 2, Exercise 60  Let and be distinct prime numbers with . If with prove that .  See for a similar problem.  Rubric  Does not demonstrate understanding. Proof contains enough of the relevant concepts to provide feedback, but does not reach the level of needs revisions.  Needs revisions. Correctly uses Fermat's Little Theorem for moduli and , but does not correctly explain how this gives the solution modulo .  Demonstrates understanding. Mathematically correct proofs that implicitly use either the Chinese Remainder Theorem or divisibility rules, but does not explain why checking modulo the prime factors proves the statements. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for all three parts using a combination of Fermat's Little Theorem and either the Chinese Remainder Theorem or divisibility rules Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex67",
  "level": "2",
  "url": "r-hw5.html#ch2-ex67",
  "type": "Problem",
  "number": "193",
  "title": "Strayer Chapter 2, Exercise 67.",
  "body": "Strayer Chapter 2, Exercise 67  Prove that following the steps in the proof of Euler's Theorem (Theorem 2.17)  Rubric  Does not demonstrate understanding. Uses Euler's Theorem or another method other than the one specified instead of following the steps in the proof of Euler's Theorem.  Needs revisions. Proof contains enough of the relevant concepts to provide feedback, but does not reach the level of demonstrates understanding.  Demonstrates understanding. Contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Proof closely and correctly follows the proof of Euler's Theorem. Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "ch2-ex71",
  "level": "2",
  "url": "r-hw5.html#ch2-ex71",
  "type": "Problem",
  "number": "194",
  "title": "Strayer Chapter 2, Exercise 71.",
  "body": "Strayer Chapter 2, Exercise 71  (Using and )  Let be an integer not divisible by . Prove that .  Let be an integer divisible by . Prove that .    See and accompanying remark.  Rubric  Does not demonstrate understanding. Contains proofs for at least one part, but does not reach the level of needs revisions. Or does not use .  Needs revisions. One parts correct, with major errors in the other part.  Demonstrates understanding. Mathematically correct proofs that implicitly use either the Chinese Remainder Theorem or divisibility rules, but does not explain why checking modulo the prime factors proves the statements. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof for all three parts using a combination of Fermat's Little Theorem and either the Chinese Remainder Theorem or divisibility rules Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch2-ex74",
  "level": "2",
  "url": "r-hw5.html#ch2-ex74",
  "type": "Problem",
  "number": "195",
  "title": "Strayer Chapter 2, Exercise 74.",
  "body": "Strayer Chapter 2, Exercise 74  Let be an odd prime number. Prove that is a reduced residue system modulo .   We did not do Chapter 2, Exercise 27, but it might be helpful to prove that first. Either use a similar argument for this problem, or use the result (as long as you also include the proof of Exercise 27 as part of the proof of this problem).    Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Only proves that the elements of the list are incongruent modulo without justifying that every integer that is relatively prime to is congruent to an element of the list.  Demonstrates understanding. Mathematically correct proofs that implicitly use that is a reduced residue system without proof. Or contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof using the definition of . May include minor errors while still demonstrating understanding of the concepts. Writing is easy to follow with only one reading.    "
},
{
  "id": "ch3-ex11",
  "level": "2",
  "url": "r-hw5.html#ch3-ex11",
  "type": "Problem",
  "number": "196",
  "title": "Strayer Chapter 3, Exercise 11.",
  "body": "Strayer Chapter 3, Exercise 11  Complete the proof of Theorem 3.2 by proving that if and are positive integers with then the integers form a complete system of residues modulo .   Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Only proves that the elements of the list are incongruent modulo without justifying that every integer is congruent to an element of the list.  Demonstrates understanding. Mathematically correct proofs that states it suffices to show the elements of the list are incongruent without justification. Or contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof using the definition of . May include minor errors while still demonstrating understanding of the concepts. Writing is easy to follow with only one reading.    "
},
{
  "id": "ch3-ex12",
  "level": "2",
  "url": "r-hw5.html#ch3-ex12",
  "type": "Problem",
  "number": "197",
  "title": "Strayer Chapter 3, Exercise 12.",
  "body": "Strayer Chapter 3, Exercise 12  Let with If is the prime factorization of prove that   Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Proof contains significant gaps, errors, or excess information.  Demonstrates understanding. Mathematically correct proofs that contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct proof. May include minor errors while still demonstrating understanding of the concepts. Work is easy to follow with formal mathematical writing.    "
},
{
  "id": "r-hw6",
  "level": "1",
  "url": "r-hw6.html",
  "type": "Section",
  "number": "B.6",
  "title": "Homework 6 Rubrics",
  "body": " Homework 6 Rubrics   Initial rubrics for the Proofs and Writing problems. More detailed rubrics available on Gradescope once the assignment is graded.  Some solutions posted after the resubmission deadline.   Chapter 5, Exercise 5    Let be a positive integer and let and be integers relatively prime to with . Prove that .  Show that the hypothesis cannot be eliminated from part (a). What can be said about if ? The hint in the back of the book is wrong  The mistake is a typo: the equal sign in should not be a different symbol. It should not be changed to as this condition is sometimes true, for example, when  To see why the hint is wrong, consider    but   Try showing that when  and a few other scenarios.      Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Work shows understanding of the definition of but it has significant gaps or errors. Proves that but not that (or other case), with mathematically correct answer and example for part (b). Or some missing details in proof for part (a) with no example in part (b).  Demonstrates understanding. Mathematically correct proof for part (a) and counter example for part (b), with some errors in the characterization of (b). May contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct solutions for both parts, using the definition of and exponent rules. Gives and example for part (b) with an answer related to the results in this section. Follows the homework guide for mathematical writing.     Chapter 5, Exercise 6  Let be a positive integer and let with . Prove or disprove that there exists with .  Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Work shows understanding of the relationship between of and but it has significant gaps or errors. Example is incorrect.  Demonstrates understanding. Example of and where there are no elements of order , but no justification for the fact there are no elements of order . Or uses informal mathematical writing.Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct example and explanation. Follows the homework guide for mathematical writing.     Chapter 5, Exercise 7  Let be a positive integer and let with .  Prove that if (with and positive integers), then .  Prove that if , then is a prime number.     Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Work shows understanding of the relationship between of and but it has significant gaps or errors. Example is incorrect.  Demonstrates understanding. Example of and where there are no elements of order , but no justification for the fact there are no elements of order . Or uses informal mathematical writing.Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct example and explanation. Follows the homework guide for mathematical writing.     Chapter 5, Exercise 8  Let and be positive integers with . Prove that . ( Hint: Consider ).     Prove the following statement, which is the converse of (restricted to primes) (which is also ):  Let be prime, and let If every such that is congruent to a power of modulo then is a primitive root modulo .     Prove the following generalization of Chapter 5, Exercise 5  Let and let be reduced residues modulo . Suppose that for all  and are relatively prime. Then      If is a prime and is a primitive root modulo is also a primitive root modulo ? Prove or provide a counter example.  Think about how this question is different from the next question.     If is a prime with and is a primitive root modulo is also a primitive root modulo ? Prove or provide a counter example.   See Chapter 5, Exercise 13a.      Let be prime and such that Suppose that Prove that is a primitive root modulo   "
},
{
  "id": "ch5-ex5",
  "level": "2",
  "url": "r-hw6.html#ch5-ex5",
  "type": "Problem",
  "number": "198",
  "title": "Chapter 5, Exercise 5.",
  "body": "Chapter 5, Exercise 5    Let be a positive integer and let and be integers relatively prime to with . Prove that .  Show that the hypothesis cannot be eliminated from part (a). What can be said about if ? The hint in the back of the book is wrong  The mistake is a typo: the equal sign in should not be a different symbol. It should not be changed to as this condition is sometimes true, for example, when  To see why the hint is wrong, consider    but   Try showing that when  and a few other scenarios.      Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Work shows understanding of the definition of but it has significant gaps or errors. Proves that but not that (or other case), with mathematically correct answer and example for part (b). Or some missing details in proof for part (a) with no example in part (b).  Demonstrates understanding. Mathematically correct proof for part (a) and counter example for part (b), with some errors in the characterization of (b). May contains extra details or missing some details, generally would benefit from proofreading. Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct solutions for both parts, using the definition of and exponent rules. Gives and example for part (b) with an answer related to the results in this section. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch5-ex6",
  "level": "2",
  "url": "r-hw6.html#ch5-ex6",
  "type": "Problem",
  "number": "200",
  "title": "Chapter 5, Exercise 6.",
  "body": "Chapter 5, Exercise 6  Let be a positive integer and let with . Prove or disprove that there exists with .  Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Work shows understanding of the relationship between of and but it has significant gaps or errors. Example is incorrect.  Demonstrates understanding. Example of and where there are no elements of order , but no justification for the fact there are no elements of order . Or uses informal mathematical writing.Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct example and explanation. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch5-ex7",
  "level": "2",
  "url": "r-hw6.html#ch5-ex7",
  "type": "Problem",
  "number": "201",
  "title": "Chapter 5, Exercise 7.",
  "body": "Chapter 5, Exercise 7  Let be a positive integer and let with .  Prove that if (with and positive integers), then .  Prove that if , then is a prime number.     Rubric  Does not demonstrate understanding. Contains enough of the relevant steps to provide feed back, but does not reach the level of needs revisions.  Needs revisions. Work shows understanding of the relationship between of and but it has significant gaps or errors. Example is incorrect.  Demonstrates understanding. Example of and where there are no elements of order , but no justification for the fact there are no elements of order . Or uses informal mathematical writing.Or does not follow the homework guide for mathematical writing.  Exemplary. Mathematically correct example and explanation. Follows the homework guide for mathematical writing.    "
},
{
  "id": "ch5-ex8",
  "level": "2",
  "url": "r-hw6.html#ch5-ex8",
  "type": "Problem",
  "number": "202",
  "title": "Chapter 5, Exercise 8.",
  "body": "Chapter 5, Exercise 8  Let and be positive integers with . Prove that . ( Hint: Consider ).   "
},
{
  "id": "pmf-generator-primitive",
  "level": "2",
  "url": "r-hw6.html#pmf-generator-primitive",
  "type": "Problem",
  "number": "203",
  "title": "",
  "body": " Prove the following statement, which is the converse of (restricted to primes) (which is also ):  Let be prime, and let If every such that is congruent to a power of modulo then is a primitive root modulo .   "
},
{
  "id": "pmf-order_k_factors",
  "level": "2",
  "url": "r-hw6.html#pmf-order_k_factors",
  "type": "Problem",
  "number": "204",
  "title": "",
  "body": " Prove the following generalization of Chapter 5, Exercise 5  Let and let be reduced residues modulo . Suppose that for all  and are relatively prime. Then    "
},
{
  "id": "pmf-neg-prim-root",
  "level": "2",
  "url": "r-hw6.html#pmf-neg-prim-root",
  "type": "Problem",
  "number": "206",
  "title": "",
  "body": " If is a prime and is a primitive root modulo is also a primitive root modulo ? Prove or provide a counter example.  Think about how this question is different from the next question.   "
},
{
  "id": "pmf-neg-prim-root-good-prime",
  "level": "2",
  "url": "r-hw6.html#pmf-neg-prim-root-good-prime",
  "type": "Problem",
  "number": "207",
  "title": "",
  "body": " If is a prime with and is a primitive root modulo is also a primitive root modulo ? Prove or provide a counter example.   See Chapter 5, Exercise 13a.    "
},
{
  "id": "pmf-order-above-half-mod",
  "level": "2",
  "url": "r-hw6.html#pmf-order-above-half-mod",
  "type": "Problem",
  "number": "208",
  "title": "",
  "body": " Let be prime and such that Suppose that Prove that is a primitive root modulo  "
},
{
  "id": "sec-additional-div",
  "level": "1",
  "url": "sec-additional-div.html",
  "type": "Section",
  "number": "C.1",
  "title": "Divisibility facts",
  "body": "Divisibility facts  Proposition 1.2   Let If and then     Proposition 1.10   Let with Then     Lemma 1.12   If  and with then     "
},
{
  "id": "lem-linear-combo",
  "level": "2",
  "url": "sec-additional-div.html#lem-linear-combo",
  "type": "Lemma",
  "number": "209",
  "title": "Proposition 1.2.",
  "body": "Proposition 1.2   Let If and then    "
},
{
  "id": "prop-div-gcd-rel-prime",
  "level": "2",
  "url": "sec-additional-div.html#prop-div-gcd-rel-prime",
  "type": "Proposition",
  "number": "210",
  "title": "Proposition 1.10.",
  "body": "Proposition 1.10   Let with Then    "
},
{
  "id": "lem-gcd-remainders",
  "level": "2",
  "url": "sec-additional-div.html#lem-gcd-remainders",
  "type": "Lemma",
  "number": "211",
  "title": "Lemma 1.12.",
  "body": "Lemma 1.12   If  and with then    "
},
{
  "id": "sec-additional-primes",
  "level": "1",
  "url": "sec-additional-primes.html",
  "type": "Section",
  "number": "C.2",
  "title": "Prime facts",
  "body": "Prime facts  Lemma 1.14 Euclid   Let with prime. If then or     Corollary 1.15   Let with prime. If then for some     Proposition 1.17   Let with Write and where are distinct primes and are nonnegative integers (possibly zero). Then and     Theorem 1.19   Let with Then     Least common multiple    least common multiple of and     least common multiple of and   If and then is a common multiple of and .  The least positive common multiple of and is called the least common multiple of and and is denoted or just .  If we want the least common multiple of several integers at once we denote that by or .   "
},
{
  "id": "lem-irreducible-prime",
  "level": "2",
  "url": "sec-additional-primes.html#lem-irreducible-prime",
  "type": "Lemma",
  "number": "212",
  "title": "Lemma 1.14.",
  "body": "Lemma 1.14 Euclid   Let with prime. If then or    "
},
{
  "id": "cor-irreducible-prime",
  "level": "2",
  "url": "sec-additional-primes.html#cor-irreducible-prime",
  "type": "Corollary",
  "number": "213",
  "title": "Corollary 1.15.",
  "body": "Corollary 1.15   Let with prime. If then for some    "
},
{
  "id": "prop-form-lcm-gcd",
  "level": "2",
  "url": "sec-additional-primes.html#prop-form-lcm-gcd",
  "type": "Proposition",
  "number": "214",
  "title": "Proposition 1.17.",
  "body": "Proposition 1.17   Let with Write and where are distinct primes and are nonnegative integers (possibly zero). Then and    "
},
{
  "id": "thm-prod-lcm-gcd",
  "level": "2",
  "url": "sec-additional-primes.html#thm-prod-lcm-gcd",
  "type": "Theorem",
  "number": "215",
  "title": "Theorem 1.19.",
  "body": "Theorem 1.19   Let with Then    "
},
{
  "id": "def-lcm",
  "level": "2",
  "url": "sec-additional-primes.html#def-lcm",
  "type": "Definition",
  "number": "216",
  "title": "Least common multiple.",
  "body": "Least common multiple    least common multiple of and     least common multiple of and   If and then is a common multiple of and .  The least positive common multiple of and is called the least common multiple of and and is denoted or just .  If we want the least common multiple of several integers at once we denote that by or .  "
},
{
  "id": "forCrossRefrence-4",
  "level": "1",
  "url": "forCrossRefrence-4.html",
  "type": "Section",
  "number": "C.3",
  "title": "Diophantine equations",
  "body": "Diophantine equations  Theorem 6.2   Let be a linear Diophantine equation in two variables and and let If then the equation has no solutions. If then there are infinitely many solutions of the form     "
},
{
  "id": "thm-linear-dioph",
  "level": "2",
  "url": "forCrossRefrence-4.html#thm-linear-dioph",
  "type": "Theorem",
  "number": "217",
  "title": "Theorem 6.2.",
  "body": "Theorem 6.2   Let be a linear Diophantine equation in two variables and and let If then the equation has no solutions. If then there are infinitely many solutions of the form    "
},
{
  "id": "sec-Congruences",
  "level": "1",
  "url": "sec-Congruences.html",
  "type": "Section",
  "number": "C.4",
  "title": "Congruences",
  "body": "Congruences  Restatement of Strayer Propositions 2.1   Let with Then:  and implies   implies      Strayer Propositions 2.4   Let with Then:   and implies   and implies .      Strayer Proposition 2.5   Let with Then if and only if .    Corollary 2.15   Let be a prime number and let Then     "
},
{
  "id": "thm-mods-equiv-relation",
  "level": "2",
  "url": "sec-Congruences.html#thm-mods-equiv-relation",
  "type": "Theorem",
  "number": "218",
  "title": "Restatement of Strayer Propositions 2.1.",
  "body": "Restatement of Strayer Propositions 2.1   Let with Then:  and implies   implies     "
},
{
  "id": "prop-basic-mod-arith",
  "level": "2",
  "url": "sec-Congruences.html#prop-basic-mod-arith",
  "type": "Theorem",
  "number": "219",
  "title": "Strayer Propositions 2.4.",
  "body": "Strayer Propositions 2.4   Let with Then:   and implies   and implies .     "
},
{
  "id": "prop-change-modulus",
  "level": "2",
  "url": "sec-Congruences.html#prop-change-modulus",
  "type": "Theorem",
  "number": "220",
  "title": "Strayer Proposition 2.5.",
  "body": "Strayer Proposition 2.5   Let with Then if and only if .   "
},
{
  "id": "cor-p-power_mod-p",
  "level": "2",
  "url": "sec-Congruences.html#cor-p-power_mod-p",
  "type": "Corollary",
  "number": "221",
  "title": "Corollary 2.15.",
  "body": "Corollary 2.15   Let be a prime number and let Then    "
},
{
  "id": "sec-Phi-Function",
  "level": "1",
  "url": "sec-Phi-Function.html",
  "type": "Section",
  "number": "C.5",
  "title": "Euler <span class=\"process-math\">\\(\\phi\\)<\/span>-Function",
  "body": " Euler -Function  Theorem 3.3   Let be a prime number and a positive integer. Then     "
},
{
  "id": "thm-phi-prime-power",
  "level": "2",
  "url": "sec-Phi-Function.html#thm-phi-prime-power",
  "type": "Theorem",
  "number": "222",
  "title": "Theorem 3.3.",
  "body": "Theorem 3.3   Let be a prime number and a positive integer. Then    "
},
{
  "id": "notation",
  "level": "1",
  "url": "notation.html",
  "type": "Appendix",
  "number": "D",
  "title": "Notation list",
  "body": "Notation list   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
