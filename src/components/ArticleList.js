import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />      
      {
        props.articles.map(article => {
          return (
            <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <ArticlePreview article={article} key={article.slug} />

          </Paper>
        </Grid>
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
        </Grid>
    </div>
  );
};

export default ArticleList;
