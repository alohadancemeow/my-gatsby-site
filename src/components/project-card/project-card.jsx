import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { format } from 'date-fns'
import { Box, Link, Card, Heading, Text } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ProjectCard = ({ title, featuredImageUrl, tags, date, dateModified, excerpt, slug, pinned }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
            }}
        >
            <Link
                as={GatsbyLink}
                to={slug}
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '1px',
                    textDecoration: 'none',
                }}
            >
                <Card
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        minHeight: '1px',
                    }}
                >
                    <Box sx={{ minHeight: '1px' }}>
                        {featuredImageUrl ? (
                            <GatsbyImage alt={title} image={featuredImageUrl.url.childImageSharp.gatsbyImageData} />
                        ) : null}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                            p: 3,
                        }}
                    >
                        <Text
                            sx={{
                                mb: 1,
                                color: dateModified ? 'muted' : 'success',
                                textDecoration: dateModified ? 'line-through' : 'none',
                            }}
                        >
                            {format(new Date(date), 'd-MMM-u')}
                        </Text>
                        <Heading
                            as="div"
                            variant="styles.h3"
                            sx={{
                                color: 'text',
                                mt: 3,
                                span: { mr: 2 },
                            }}
                        >
                            {pinned ? (
                                <span as="span" role="img" aria-label="A thumbtack (drawing pin)">
                                    📌
                                </span>
                            ) : null}
                            {title}
                        </Heading>
                    </Box>

                    <Box sx={{ p: 3, pt: 0 }}>
                        <Text sx={{ color: 'secondary' }}>อย่าเข้ามาดูครับ</Text>
                    </Box>
                </Card>
            </Link>
        </Box>
    )
}
