def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars >= 40
    return 40 <= cigars <= 60

print(cigar_party(70, True))



"""
If it's a weekend (is_weekend is True), the only condition is that there must be at least 40 cigars.
If it's not a weekend, the number of cigars must be between 40 and 60, inclusive."""